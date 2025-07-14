let items = [
  { name: "T-Shirt", price: 500, stock: 100 },
  { name: "Jeans", price: 1200, stock: 60 },
  { name: "Jacket", price: 2500, stock: 30 },
  { name: "Cap", price: 300, stock: 80 },
];

items.forEach((item) => {
  console.log(`${item.name}: ₹${item.price}`);
});

let premiumItems = items.filter((item) => item.price > 1000);
console.log("Premium Items:", premiumItems);

let totalInventoryValue = items.reduce(
  (total, item) => total + (item.price * item.stock),
  0
);
console.log(`Total Inventory Value = ₹${totalInventoryValue}`);






