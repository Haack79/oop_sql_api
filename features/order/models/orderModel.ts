import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../../config/database';
import { OrderAttributes, OrderCreationAttributes } from '../interfaces/orderInterface';

// Define the Order model class
class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  public id!: number;
  public productId!: number;
  public quantity!: number;
}

// Initialize the Order model
Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'orders'
});

export default Order;