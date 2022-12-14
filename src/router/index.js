import { createRouter, createWebHistory } from 'vue-router'



const routes = [
{
  path: '/', 
  

},
{
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
},
{
  path: '/register',
  name: 'register',
  component: () => import(/*webpackChunkName: "Register" */'../views/RegisterView.vue'),
},
{
  path: '/products',
  name: 'products-app',
  component: () => import(/*webpackChunkName: "Productos" */ '../products/HomeProducts.vue'),
  children: [
    {
      path: 'list-products',
      name: 'list-products',
      component: () => import(/*webpackChunkName: "ListaProductos" */ '../products/views/ListProductsView.vue'),
    },
    {
      path: ':id',
      name: 'product-id',
      component: () => import(/*webpackChunkName: "ProductoId" */ '../products/views/ProductByIdView.vue'),

    }
  ]
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
