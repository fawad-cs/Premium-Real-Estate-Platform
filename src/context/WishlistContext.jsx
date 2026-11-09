import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("estora-wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("estora-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (property) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === property.id);

      return exists
        ? prev.filter((item) => item.id !== property.id)
        : [...prev, property];
    });
  };

  const isWishlisted = (id) =>
    wishlist.some((item) => item.id === id);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}