const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize('Attend', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
});

class Attendee extends Model {}

Attendee.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('attendee', 'speaker', 'vip'),
    defaultValue: 'attendee',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'attendees',
  tableName: 'attendees',
  timestamps: false,
});

Attendee.addHook('beforeCreate', async (attendee) => {
  if (attendee.password) {
    const salt = await bcrypt.genSalt(10);
    attendee.password = await bcrypt.hash(attendee.password, salt);
  }
});

module.exports = Attendee;