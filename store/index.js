/* eslint-disable no-param-reassign */

export const state = () => ({
	userId: '',
})

export const mutations = {
	setUserId(_state, payload) {
		_state.userId = payload
	},
}

export const actions = {
	commitUserId({ commit }, payload) {
		commit('setUserId', payload)
	},
}
