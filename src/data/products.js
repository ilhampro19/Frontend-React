export const generateProducts = (count = 10000) => {
    const categories = ['Electronic', 'Food', 'Beverage', 'Clothe', 'Stationary'];
    const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `Products ${i + 1}`,
        price: Math.floor(Math.random() * 100000) + 1000,
        category: categories[Math.floor(Math.random() * categories.length)],
        brand: brands[Math.floor(Math.random() * brands.length)],
        stock: Math.floor(Math.random() * 100) + 1,
    }));
}

export const products = generateProducts(10000);