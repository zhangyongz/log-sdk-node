const { sequelize } = require('@core/db')
const { Sequelize, Model } = require('sequelize')

class Customize extends Model {
}

Customize.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  event_name: Sequelize.STRING,
  params: Sequelize.STRING
}, {
  sequelize,
  tableName: 'log_customize'
})

module.exports = {
  Customize
}