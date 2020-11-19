import {ApiService as api} from '@/services'

const state = () => ({
    all: null,
    quest: null
})

// getters
const getters = {
    get: (state) => {
        return state
    },
}

// actions
const actions = {
    async fetchQuests(context) {
        api.fetchQuests().then((response) => context.commit('set', { all: response.data.quests }))
    },
    async fetchAllByQuestId(context, id) {
        api.fetchAllByQuestId(id).then((response) => context.commit('set', { quest: response.data.quest }))
    }
}

// mutations
const mutations = {
    set(state, object) {
        state = Object.assign(state, object)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}