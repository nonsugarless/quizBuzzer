<template>
	<div>
		<section class="section">
			<h2>デバイスを操作</h2>
			<div class="text-center">
				<v-btn large outlined color="indigo" @click="resetBtn"
					>早押しボタンをリセット</v-btn
				>
			</div>
		</section>
		<section class="section">
			<h2>音を鳴らす</h2>
			<div class="text-center">
				<v-btn
					large
					outlined
					color="indigo"
					class="ma-2"
					@click="correct.play()"
					>ピンポン♪</v-btn
				>
				<v-btn
					large
					outlined
					color="red"
					class="ma-2"
					@click="incorrect.play()"
				>
					ブッブー♪
				</v-btn>
			</div>
		</section>
		<section class="section">
			<h2>問題を切り替える</h2>
			<div class="text-center">
				<v-btn
					v-for="(quiz, index) in quizData"
					:key="quiz.text"
					large
					outlined
					class="ma-2"
					color="indigo"
					@click="changeQuiz(index)"
					>{{ quiz.text }}</v-btn
				>
			</div>
		</section>
	</div>
</template>

<script>
import Vue from 'vue'
import { Howl } from 'howler'
import { resetBtn, changeQuiz } from '@/api/firebase'
import quizData from '@/static/data/quiz'

export default Vue.extend({
	layout: 'manage',
	data: () => ({
		quizData,
		correct: new Howl({
			src: ['/audio/sound-correct.wav'],
		}),
		incorrect: new Howl({
			src: ['/audio/sound-incorrect.wav'],
		}),
	}),
	methods: {
		resetBtn() {
			resetBtn()
		},
		changeQuiz(index) {
			changeQuiz(index)
		},
	},
})
</script>

<style lang="scss" scoped>
.section {
	&:not(:last-child) {
		margin-bottom: 4rem;
	}

	h2 {
		margin-bottom: 1em;
		text-align: center;
	}
}
</style>
