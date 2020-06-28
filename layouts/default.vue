<template>
	<div ref="appContainer" class="default-container">
		<v-app>
			<v-main>
				<v-container fluid fill-height>
					<v-layout justify-center align-center column>
						<Nuxt />
					</v-layout>
				</v-container>
			</v-main>
		</v-app>
	</div>
</template>

<script>
import Vue from 'vue'
import randomStr from '@/utilities/createRandomStr'

export default Vue.extend({
	name: 'Default',
	data: () => ({
		showNav: false,
	}),
	created() {
		this.$store.dispatch('commitUserId', randomStr())
	},
})
</script>
