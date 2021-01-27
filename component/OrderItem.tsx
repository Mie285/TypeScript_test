import React from 'react';
import {Order, ToggleOrder} from '../types'

interface OrderItemProps{
    order: Order
    toggleOrder : ToggleOrder
}

export const OrderItem: React.FC<OrderItemProps> = ({
    order, toggleOrder
}) => {
    return(
        <li>
            <label className = {order.complete ? "complete" : undefined}></label>
            <input type="checkbox" checked={order.complete} onChange = {() => toggleOrder(order)}/>
            {order.name}
        </li>
    )
}