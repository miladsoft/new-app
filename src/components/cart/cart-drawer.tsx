import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "../ui/button";

export function CartDrawer() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    getTotal, 
    isCartOpen, 
    setIsCartOpen,
    clearCart
  } = useCart();
  
  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);
  
  // Close cart with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsCartOpen]);

  const [showCheckout, setShowCheckout] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) return;
    setShowCheckout(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setFormSubmitted(false);
      setShowCheckout(false);
      setIsCartOpen(false);
      // Show success message or redirect
    }, 1500);
  };
  
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Cart drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full md:w-[400px] bg-background border-l shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cart header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="font-semibold text-lg">Shopping Cart</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            
            {/* Cart content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-lg">Your cart is empty</h3>
                  <p className="text-muted-foreground mt-1">
                    Looks like you haven't added any items to your cart yet.
                  </p>
                  <Button 
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : showCheckout ? (
                <div className="space-y-6">
                  <h3 className="font-medium text-lg mb-4">Payment Details</h3>
                  
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Cardholder Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="text-sm font-medium">
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        required
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        maxLength={19}
                        placeholder="xxxx xxxx xxxx xxxx"
                        className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="expiry" className="text-sm font-medium">
                          Expiry Date
                        </label>
                        <input
                          id="expiry"
                          type="text"
                          required
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="cvc" className="text-sm font-medium">
                          CVC
                        </label>
                        <input
                          id="cvc"
                          type="text"
                          required
                          inputMode="numeric"
                          maxLength={3}
                          placeholder="123"
                          className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium">
                        Billing Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        required
                        className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="123 Main St"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2 col-span-1">
                        <label htmlFor="zip" className="text-sm font-medium">
                          Zip Code
                        </label>
                        <input
                          id="zip"
                          type="text"
                          required
                          className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="12345"
                        />
                      </div>
                      
                      <div className="space-y-2 col-span-2">
                        <label htmlFor="city" className="text-sm font-medium">
                          City
                        </label>
                        <input
                          id="city"
                          type="text"
                          required
                          className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="New York"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t mt-6">
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={formSubmitted}
                      >
                        {formSubmitted ? (
                          <span className="flex items-center">
                            Processing
                            <svg
                              className="animate-spin ml-2 h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Pay ${getTotal().toLocaleString()}
                          </span>
                        )}
                      </Button>
                      
                      <button
                        type="button"
                        className="mt-4 text-sm text-muted-foreground w-full text-center"
                        onClick={() => setShowCheckout(false)}
                      >
                        Return to cart
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b pb-4"
                  >
                    <div className="w-20 h-20 overflow-hidden rounded-md bg-muted/30 flex-shrink-0">
                      <img 
                        src={item.imageSrc}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-muted"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-center w-8">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-muted"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        
                        <div className="font-semibold">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Cart footer with total and checkout button */}
            {items.length > 0 && !showCheckout && (
              <div className="border-t p-4 space-y-4">
                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>${getTotal().toLocaleString()}</span>
                </div>
                
                <Button
                  className="w-full"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}