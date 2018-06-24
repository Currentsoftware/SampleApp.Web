import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        favorites: []
    },
    mutations: {
        addToFavorites(state, show) {
            window.console.log('store add to' + show.id)

            state.favorites.push(show);
        }
    }
});