import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext()

const useCart = () => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0);

    const addToCart = useCallback((product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prevItems, { ...product, quantity: 1 }]
        })
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }, []);

    const updateQuantity = useCallback((productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
            return
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        )
    }, [removeFromCart]);

    const clearCart = useCallback(() => {
        setCartItems([])
    }, []);

    const total = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    }, [cartItems]);

    useEffect(() => {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
        setCartCount(totalItems)
    }, [cartItems]);

    const contextValue = useMemo(() => ({
        cartItems,
        cartCount,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
    }), [cartItems, cartCount, total, addToCart, removeFromCart, updateQuantity, clearCart]);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export default useCart;