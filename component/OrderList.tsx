import React from 'react';
import {OrderItem} from './OrderItem'
import {Order, ToggleOrder} from '../types'

interface OrderListProps{
    Orders: Array<Order>
    toggleOrder : ToggleOrder
}

export const OrderList: React.FC<OrderListProps> = ({Orders: orders,toggleOrder}) => {
    return <ul>{orders.map(order =>{
        return <OrderItem key =  {order.name} order={order} toggleOrder={toggleOrder} />
    })}
    </ul>
}