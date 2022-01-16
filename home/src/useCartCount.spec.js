import { renderHook, act } from "@testing-library/react-hooks"
import { useCartCount } from './useCartCount';


let callback = () => {};

jest.mock("cart/cart", () => ({
    cart: {
        cartItems: [],
        subscribe: cb => {
            callback = cb;
        }
    }
}))

describe("Test - useCartCount", () => {
    it("Should return cart count", () => {
        const { result } = renderHook(() => useCartCount());
        expect(result.current).toBe(0);
    });

    it("Should return cart count", () => {
        const { result } = renderHook(() => useCartCount());
        act(() => {
            callback({ cartItems: [{id: 1}] });
        });
        expect(result.current).toBe(1);
    });
})