export type Order = {
    id: string,
    name: string,
    complete: boolean;
  }

//export type RemoveOrder = (rmInput : string) => void

export type AddNewInput = (newInput: string) => void

export type ToggleOrder = (selectedOrder: Order) => void