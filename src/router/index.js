import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Kategorije from '../views/Kategorije.vue'
import KategorijeVesti from '../views/KategorijeVesti.vue'
import ClickedVest from '../views/ClickedVest.vue'
import Najcitanije from '../views/Najcitanije.vue'
import Korisnici from '../views/Korisnici.vue'
import Vesti from '../views/Vesti.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/clickedvest/:id',
    name: 'ClickedVest',
    component: ClickedVest
  },
  {
    path: '/najcitanije',
    name: 'Najcitanije',
    component: Najcitanije
  },
  {
    path: '/korisnik',
    name: 'Korisnici',
    component: Korisnici
  },
  {
    path: '/vest',
    name: 'Vesti',
    component: Vesti
  },
  {
    path: '/kategorijevesti',
    name: 'KategorijeVesti',
    component: KategorijeVesti
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/kategorija',
    name: 'Kategorije',
    component: Kategorije
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
