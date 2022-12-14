const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.model')

const Conversations = db.define('conversations', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  title:{
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'image_url'
  },
  createdBy:{
    type: DataTypes.UUID,
    allowNull: false,
    field: 'created_by',
    references: {
      key: 'id',
      model: Users
    }
  }
  
})

module.exports = Conversations