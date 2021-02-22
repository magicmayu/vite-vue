const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../../nested/home/Home.vue'),
  },
  {
    path: '/',
    redirect: () => '/home',
  },
]

export default routes
