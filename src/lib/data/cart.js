import { writable } from 'svelte/store';

// Helper function to load cart from localStorage
const loadCart = () => {
  if (typeof localStorage !== 'undefined') {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

// Create the writable store with initial value from localStorage
const createCartStore = () => {
  const cart = writable(loadCart());
  
  // Subscribe to changes and update localStorage
  const { subscribe, set, update } = cart;
  
  return {
    subscribe,
    
    // Add item to cart
    addItem: (product) => {
        update(items => {
          // Check if item already exists in cart
          const existingItemIndex = items.findIndex(item => item.id === product.id);
          
          if (existingItemIndex !== -1) {
            // Increase quantity by the product's quantity amount (not just 1)
            const updatedItems = [...items];
            // Add the incoming product's quantity to the existing quantity
            updatedItems[existingItemIndex].quantity += product.quantity || 1;
            localStorage.setItem('cart', JSON.stringify(updatedItems));
            return updatedItems;
          } else {
            // Add new item with the specified quantity (or default to 1)
            const updatedItems = [...items, { 
              ...product, 
              quantity: product.quantity || 1 
            }];
            localStorage.setItem('cart', JSON.stringify(updatedItems));
            return updatedItems;
          }
        });
      },
    
    // Remove item from cart
    removeItem: (productId) => {
      update(items => {
        const updatedItems = items.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        return updatedItems;
      });
    },
    
    // Update item quantity
    updateQuantity: (productId, quantity) => {
      update(items => {
        const updatedItems = items.map(item => 
          item.id === productId ? { ...item, quantity } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        return updatedItems;
      });
    },
    
    // Clear cart
    clearCart: () => {
      localStorage.removeItem('cart');
      set([]);
    }
  };
};

export const cart = createCartStore();

