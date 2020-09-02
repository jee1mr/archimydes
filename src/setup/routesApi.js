export default {
  login: {
    path: '/signin',
  },
  stories: {
    path: '/stories',
    list: '/stories',
    get: (id) => `/stories/${id}`,
    update: (id, status) => `/stories/${id}/${status}`,
  },
}
