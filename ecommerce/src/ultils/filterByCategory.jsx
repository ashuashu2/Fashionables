export const filterByCategory = (products, category) => {
    switch (category) {
      case "Shirts":
        return products.filter((products) => products.category === "Shirts");
  
      case "Tshirt":
        return products.filter(
          (products) => products.category === "Tshirt");

    case "Top":
    return products.filter((products) => products.category === "Top");
    
    case "Dresses":
    return products.filter((products) => products.category === "Dresses");

      default:
        return products;
    }
  };