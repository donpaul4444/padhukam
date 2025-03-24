import {create} from "zustand";
export interface CartItem {
    productId: {
      _id: string;
      name: string;
      price: number;
      image: string[];
    };
    quantity: number;
  }

interface CartState {
    storeCart:CartItem[];
    setStoreCart:(items:CartItem[])=>void
    clearCart: () => void
}

const useCartStore = create<CartState>((set)=>({
    storeCart:[],
    setStoreCart:(items)=>set({storeCart:items}),
    clearCart:()=> set(()=>({
storeCart:[],
    }))
    
}))
export default useCartStore