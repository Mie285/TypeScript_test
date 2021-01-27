import React, { useState } from 'react';
import {NewOrder} from './component/NewOrder'
import {OrderList} from './component/OrderList'
import {Order, AddNewInput, ToggleOrder} from './types'

const initialOrders: Array<Order> = [
  { name:"cake", complete: false }
];

const App: React.FC = () =>{
  const [Orders, setOrders] = useState(initialOrders)

  const toggleOrder : ToggleOrder = selectedOrder => {
    const newOrders = Orders.map((order: {name: string; complete: boolean}) => {
      if (order === selectedOrder ){
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
    setOrders([...Orders, {name: newInput, complete: false}])
  }
  return (
    <div>
       <React.Fragment>
        <OrderList Orders= {Orders} toggleOrder={toggleOrder}/>
        <NewOrder addInput = {addInput}/>
      </React.Fragment>
    </div>
  );
}

export default App;
