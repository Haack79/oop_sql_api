import { Optional } from 'sequelize';

export interface OrderAttributes {
    id: number;
    productId: number;
    quantity: number;
  }

 // Define creation attributes for the Order model
export interface OrderCreationAttributes extends Optional<OrderAttributes, 'id' | 'quantity'> {}
  