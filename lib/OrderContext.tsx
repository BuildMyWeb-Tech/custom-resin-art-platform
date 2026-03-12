'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type ProductType = 'wedding' | 'baby' | 'nameboard';

export interface OrderData {
  product: ProductType | null;
  productName: string;
  size: string;
  colorTheme: string;
  nameToAdd: string;
  specialDate: string;
  message: string;
  deliveryDate: string;
  referenceImagePreview: string | null;
  memoryImagePreview: string | null;
  specialInstructions: string;
  totalPrice: number;
}

const defaultOrder: OrderData = {
  product: null,
  productName: '',
  size: 'Small',
  colorTheme: 'Gold',
  nameToAdd: '',
  specialDate: '',
  message: '',
  deliveryDate: '',
  referenceImagePreview: null,
  memoryImagePreview: null,
  specialInstructions: '',
  totalPrice: 3000,
};

interface OrderContextType {
  order: OrderData;
  setOrder: (data: Partial<OrderData>) => void;
  resetOrder: () => void;
}

const OrderContext = createContext<OrderContextType>({
  order: defaultOrder,
  setOrder: () => {},
  resetOrder: () => {},
});

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrderState] = useState<OrderData>(defaultOrder);

  const setOrder = (data: Partial<OrderData>) => {
    setOrderState(prev => ({ ...prev, ...data }));
  };

  const resetOrder = () => {
    setOrderState(defaultOrder);
  };

  return (
    <OrderContext.Provider value={{ order, setOrder, resetOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);
