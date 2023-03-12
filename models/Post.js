const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}
//create post model
Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post;
