import {
  createRouter,
  createWebHistory
} from 'vue-router'

import AboutMe from '@/views/AboutMe'
import MyTechnologies from '@/views/MyTechnologies'

const routes = [{
    path: '/',
    redirect: '/about-me'
  },
  {
    path: '/about-me',
    components: {
      app: AboutMe
    }
  },
  {
    path: '/my-technologies',
    components: {
      app: MyTechnologies
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router