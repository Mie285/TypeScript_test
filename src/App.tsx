import { listenerCount } from 'events';
import { stringify } from 'querystring';
import React, { FormEvent, useState } from 'react';
import { NewOrder } from './component/NewOrder'
import { OrderList } from './component/OrderList'
import { Order, AddNewInput, ToggleOrder } from './types' //RemoveOrder

const initialOrders: Array<Order> = [
  {id: 'a' , name: "cake", complete: false }
];

const App: React.FC = () => {
  const [Orders, setOrders] = useState(initialOrders)

  const toggleOrder: ToggleOrder = selectedOrder => {
    const newOrders = Orders.map((order: { id: string; name: string; complete: boolean }) => {
      if (order === selectedOrder) {
        return {
          ...order,
          complete: !order.complete
        }
      }
      return order
    })
    setOrders(newOrders)
  }
  const addInput: AddNewInput = (newInput: string) => {
    newInput.trim() !== "" &&
      setOrders([...Orders, {id:'', name: newInput, complete: false }])
  }

  return (
    <div>
      <React.Fragment>
        <ul>
          <OrderList Orders={Orders} toggleOrder={toggleOrder} />
          <NewOrder addInput={addInput} />
        </ul>
      </React.Fragment>
    </div>
  );
}
export default App;