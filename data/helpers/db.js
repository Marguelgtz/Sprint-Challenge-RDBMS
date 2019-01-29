const knex = require('knex')

const dbConfig = require('../../knexfile')
const db = knex(dbConfig.development)

module.exports = {
  getProject: (id) => {
    if(id) {
      return db('projects').where('id', id)
    }
    return db('projects')
  },

  addProject: (project) => {
    return db('projects').insert(project)
  },

  getAction: (id) => {
    if(id) {
      return db('projects').where('id', id)
    }
    return db('projects')
  },

  addAction: (project) => {
    return db('projects').insert(project)
  }
}