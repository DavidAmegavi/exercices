
type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function calculateSubtotal(objects: CartLine[]): CartLineWithSubtotal[] {
  return objects.map(cart => {
    return {
      product: cart.product,
      price: cart.price, 
      quantity: cart.quantity, 
      subtotal: cart.quantity * cart.price
    }
  })
}



