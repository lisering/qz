'use strict';
module.exports = (sequelize, DataTypes) => {
  var state = sequelize.define('state', {
    areaName: DataTypes.STRING,
    stateName: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    stateImg: DataTypes.STRING,
    stateVotes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return state;
};