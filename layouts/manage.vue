<template>
	<v-app>
		<v-main>
			<v-container fluid fill-height>
				<v-layout justify-center align-center>
					<Nuxt />
				</v-layout>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	data: () => ({
		drawer: null,
	}),
})
</script>

<style lang="scss" scoped>
.v-list {
	&__tile {
		font-weight: bold;
	}
}
</style>
