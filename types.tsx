export type Order = {
    name: string,
    complete: boolean;
  }

export type AddNewInput = (newInput: string) => void

export type ToggleOrder = (selectedOrder: Order) => void