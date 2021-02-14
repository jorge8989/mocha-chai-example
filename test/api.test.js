const { expect } = require('chai');

const getUser = require('../api').getUser;
const getUsers = require('../api').getUsers;
const createUserPost = require('../api').createUserPost;

describe('API', () => {
  describe('GET /users/:id', () => {
    it('should return a user', async () => {
      const response = await getUser(1);
      expect(response.status).to.be.equal(200);
      const user = await response.json();
      expect(user).to.be.an('Object');
    })
  })
  describe('GET /users', () => {
    it('should return a list of users', async () => {
      const response = await getUsers();
      expect(response.status).to.be.equal(200);
      const users = await response.json();
      expect(users).to.be.an('Array');
      for (let user of users) {
        expect(user).to.be.an('Object');
        expect(user.id).to.be.a('Number');
        expect(user.name).to.be.a('String');
      }
    })
  })
  describe('POST /users/:id/posts', () => {
    it('should create a user post', async () => {
      const response = await createUserPost(1, {
        "title": "Some title",
        "body": "Some body"
      });
      expect(response.status).to.be.equal(201);
      const post = await response.json();
      expect(post).to.be.an('Object');
    });
  })
});