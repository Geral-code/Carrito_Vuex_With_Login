import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [

{
  path: '/',

},
{
  path: '/login',
  name: 'login',
  component: () => import(/*webpackChunkName: "Login" */ '../views/LoginView.vue'),
},
{
  path: '/register',
  name: 'register',
  component: () => import(/*webpackChunkName: "Register" */'../views/RegisterView.vue'),
},
{
  path: '/products',
  name:'products-app',
  components: () => import(/*webpackChunkName: "Productos" */ '../products/HomeProducts.vue'),
  children: [
    {
      path: 'list-products',
      name: 'list-products',
      components: () => import(/*webpackChunkName: "ListaProductos" */ '../products/views/ListProductsView.vue'),
    },
    {
      path: ':id',
      name: 'product-id',
      components: () => import(/*webpackChunkName: "ProductoId" */ '..products/views/ProductByView.vue'),
      
    }
  ]


},



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
