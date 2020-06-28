<template>
	<div>
		<p class="text">{{ currentQuiz.text }}</p>
		<v-btn
			v-if="waitingClicked"
			:disabled="!!respondentId"
			type="button"
			x-large
			outlined
			color="indigo"
			@click="postQuizState"
			>PUSH!</v-btn
		>
		<p v-else-if="clickedAtFirst">解答権GET!</p>
		<p v-else>他の人に解答権があります</p>
	</div>
</template>

<script>
import Vue from 'vue'
import { Howl } from 'howler'
import {
	postQuiz,
	respondentObserver,
	currentQuizObserver,
} from '@/api/firebase'
import quizData from '@/static/data/quiz'

export default Vue.extend({
	data: () => ({
		quizData,
		currentQuizIndex: 0,
		userId: '',
		respondentId: '',
		isTransactioning: false,
		sound: new Howl({
			src: ['/audio/sound-btn.wav'],
		}),
	}),
	computed: {
		currentQuiz() {
			return this.quizData[this.currentQuizIndex]
		},
		waitingClicked() {
			return !this.clickedAtFirst && !this.clickedAtSecondAndLater
		},
		clickedAtFirst() {
			const result =
				!this.isTransactioning &&
				this.respondentId &&
				this.userId === this.respondentId
			return result
		},
		clickedAtSecondAndLater() {
			return !!this.respondentId && this.userId !== this.respondentId
		},
	},
	watch: {
		clickedAtFirst(newVal) {
			if (newVal) {
				this.sound.play()
			}
		},
	},
	created() {
		currentQuizObserver((val) => {
			this.currentQuizIndex = val
		})
		respondentObserver((val) => {
			this.respondentId = val
		})
	},
	mounted() {
		this.userId = this.$store.state.userId
	},
	methods: {
		postQuizState() {
			this.isTransactioning = true
			if (this.respondentId) return
			postQuiz(this.userId).then(() => {
				this.isTransactioning = false
			})
		},
	},
})
</script>

<style lang="scss" scoped>
div {
	text-align: center;
}

.text {
	margin: 0 0 4em;
}
</style>
