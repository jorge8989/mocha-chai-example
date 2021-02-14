const fetch = require('node-fetch');

const HOST = 'http://jsonplaceholder.typicode.com';

module.exports = {
  getUser: (id) => {
    return fetch(`${HOST}/users/${id}`)
  },

  getUsers: () => {
    return fetch(`${HOST}/users`)
  },

  createUserPost: (userId, post) => {
    return fetch(`${HOST}/users/${userId}/posts`, {
      method: 'POST',
      Headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    });
  }
}