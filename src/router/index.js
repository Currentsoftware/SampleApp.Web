import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../home/HomePage'
import ShowsPage from '../shows/ShowsPage'
import DetailsPage  from '../showDetails/DetailsPage'

Vue.use(Router) 

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/shows',
        name: 'Shows',
        component: ShowsPage
    },
    {
        path: '/showdetails/:id',
        name: 'ShowDetails',
        component: DetailsPage
    }]
});