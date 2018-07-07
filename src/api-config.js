module.exports = {
  fetchTasks: {
    path: '/api/get/task',
    method: 'GET',
  },

  fetchTask: {
    path: '/api/get/tasks/:id',
    method: 'GET',
  },

  fetchApplicationTask: {
    path: '/api/get/tasks/:id/bids',
    method: 'GET',
  },

  fetchUser: {
    path: '/api/get/users/:id',
    method: 'GET',
  },



  addTask: {
    path: '/api/v001/tasks',
    method: 'POST',
  },

  addApplicationTask: {
    path: '/api/v001/tasks/:id/bids',
    method: 'POST',
  },

  addUser: {
    path: '/api/v001/user/login',
    method: 'POST',
  },

  updateTask: {
    path: '/api/v001/books/:id',
    method: 'PATCH',
  },

  deleteBook: {
    path: '/api/v001/books/:id',
    method: 'DELETE',
  },
};
