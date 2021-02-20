const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/',
    redirect: () => '/home',
  },
]

export default routes
