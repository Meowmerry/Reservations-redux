module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define("reserve", {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
    },
    partySize: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.STRING
    }
  });
  
  return Reserve;
};
