export const filterByColor = (products, color) => {
    switch (color) {
      case "Black":
        return products.filter((products) => products.color === "Black");
  
      case "White":
        return products.filter(
          (products) => products.color === "White"
        );

      default:
        return products;
    }
  };