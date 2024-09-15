import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamePage from '../views/GamePage.vue'
import QuestionPage from '../views/QuestionPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gamePage',
      name: 'gamePage',
      component: GamePage
    },
    {
      path: '/questionPage',
      name: 'questionPage',
      // query:
      component: QuestionPage
    }
  ]
})

export default router
