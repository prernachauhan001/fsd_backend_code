import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello! Server is working.");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(express.json());

// 100 Products
const products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 25000, category: "Electronics" },
  { id: 3, name: "Tablet", price: 18000, category: "Electronics" },
  { id: 4, name: "Smart Watch", price: 5000, category: "Electronics" },
  { id: 5, name: "Headphones", price: 2500, category: "Audio" },
  { id: 6, name: "Bluetooth Speaker", price: 3000, category: "Audio" },
  { id: 7, name: "Keyboard", price: 1500, category: "Computer Accessories" },
  { id: 8, name: "Mouse", price: 800, category: "Computer Accessories" },
  { id: 9, name: "Monitor", price: 12000, category: "Computer Accessories" },
  { id: 10, name: "Webcam", price: 3500, category: "Computer Accessories" },

  { id: 11, name: "Printer", price: 9000, category: "Office" },
  { id: 12, name: "Scanner", price: 7000, category: "Office" },
  { id: 13, name: "Desk Lamp", price: 1200, category: "Home" },
  { id: 14, name: "Table Fan", price: 2200, category: "Home Appliances" },
  { id: 15, name: "Ceiling Fan", price: 3500, category: "Home Appliances" },
  { id: 16, name: "Air Conditioner", price: 40000, category: "Home Appliances" },
  { id: 17, name: "Refrigerator", price: 45000, category: "Home Appliances" },
  { id: 18, name: "Washing Machine", price: 32000, category: "Home Appliances" },
  { id: 19, name: "Microwave Oven", price: 10000, category: "Kitchen" },
  { id: 20, name: "Electric Kettle", price: 1800, category: "Kitchen" },

  { id: 21, name: "Coffee Maker", price: 4500, category: "Kitchen" },
  { id: 22, name: "Toaster", price: 2200, category: "Kitchen" },
  { id: 23, name: "Mixer Grinder", price: 3500, category: "Kitchen" },
  { id: 24, name: "Juicer", price: 3000, category: "Kitchen" },
  { id: 25, name: "Water Bottle", price: 500, category: "Kitchen" },
  { id: 26, name: "Backpack", price: 1800, category: "Accessories" },
  { id: 27, name: "Wallet", price: 900, category: "Accessories" },
  { id: 28, name: "Belt", price: 700, category: "Accessories" },
  { id: 29, name: "Sunglasses", price: 1500, category: "Accessories" },
  { id: 30, name: "Umbrella", price: 600, category: "Accessories" },

  { id: 31, name: "T-Shirt", price: 800, category: "Clothing" },
  { id: 32, name: "Jeans", price: 1800, category: "Clothing" },
  { id: 33, name: "Jacket", price: 3000, category: "Clothing" },
  { id: 34, name: "Hoodie", price: 2200, category: "Clothing" },
  { id: 35, name: "Shirt", price: 1400, category: "Clothing" },
  { id: 36, name: "Shorts", price: 900, category: "Clothing" },
  { id: 37, name: "Track Pants", price: 1200, category: "Clothing" },
  { id: 38, name: "Sweater", price: 2000, category: "Clothing" },
  { id: 39, name: "Cap", price: 500, category: "Clothing" },
  { id: 40, name: "Socks", price: 300, category: "Clothing" },

  { id: 41, name: "Running Shoes", price: 3500, category: "Footwear" },
  { id: 42, name: "Sports Shoes", price: 4000, category: "Footwear" },
  { id: 43, name: "Casual Shoes", price: 2500, category: "Footwear" },
  { id: 44, name: "Sandals", price: 900, category: "Footwear" },
  { id: 45, name: "Slippers", price: 500, category: "Footwear" },
  { id: 46, name: "Football", price: 1200, category: "Sports" },
  { id: 47, name: "Cricket Bat", price: 3500, category: "Sports" },
  { id: 48, name: "Cricket Ball", price: 500, category: "Sports" },
  { id: 49, name: "Tennis Racket", price: 2500, category: "Sports" },
  { id: 50, name: "Badminton Racket", price: 1800, category: "Sports" },

  { id: 51, name: "Yoga Mat", price: 1000, category: "Fitness" },
  { id: 52, name: "Dumbbells", price: 2000, category: "Fitness" },
  { id: 53, name: "Skipping Rope", price: 400, category: "Fitness" },
  { id: 54, name: "Exercise Cycle", price: 15000, category: "Fitness" },
  { id: 55, name: "Treadmill", price: 35000, category: "Fitness" },
  { id: 56, name: "Notebook", price: 150, category: "Stationery" },
  { id: 57, name: "Pen Set", price: 200, category: "Stationery" },
  { id: 58, name: "Pencil Box", price: 250, category: "Stationery" },
  { id: 59, name: "Calculator", price: 500, category: "Stationery" },
  { id: 60, name: "Diary", price: 350, category: "Stationery" },

  { id: 61, name: "Backpack Pro", price: 2500, category: "Bags" },
  { id: 62, name: "Travel Bag", price: 3000, category: "Bags" },
  { id: 63, name: "Laptop Bag", price: 2200, category: "Bags" },
  { id: 64, name: "School Bag", price: 1500, category: "Bags" },
  { id: 65, name: "Handbag", price: 2800, category: "Bags" },
  { id: 66, name: "Bed Sheet", price: 1200, category: "Home" },
  { id: 67, name: "Pillow", price: 700, category: "Home" },
  { id: 68, name: "Blanket", price: 1800, category: "Home" },
  { id: 69, name: "Curtains", price: 2000, category: "Home" },
  { id: 70, name: "Cushion", price: 500, category: "Home" },

  { id: 71, name: "Bookshelf", price: 6000, category: "Furniture" },
  { id: 72, name: "Study Table", price: 7000, category: "Furniture" },
  { id: 73, name: "Office Chair", price: 8500, category: "Furniture" },
  { id: 74, name: "Sofa", price: 25000, category: "Furniture" },
  { id: 75, name: "Dining Table", price: 18000, category: "Furniture" },
  { id: 76, name: "Wall Clock", price: 900, category: "Decor" },
  { id: 77, name: "Flower Vase", price: 600, category: "Decor" },
  { id: 78, name: "Photo Frame", price: 400, category: "Decor" },
  { id: 79, name: "Table Clock", price: 700, category: "Decor" },
  { id: 80, name: "LED Lights", price: 1000, category: "Decor" },

  { id: 81, name: "Hair Dryer", price: 1800, category: "Personal Care" },
  { id: 82, name: "Electric Shaver", price: 2500, category: "Personal Care" },
  { id: 83, name: "Hair Straightener", price: 2200, category: "Personal Care" },
  { id: 84, name: "Trimmer", price: 1500, category: "Personal Care" },
  { id: 85, name: "Electric Toothbrush", price: 1800, category: "Personal Care" },
  { id: 86, name: "Toy Car", price: 700, category: "Toys" },
  { id: 87, name: "Puzzle Game", price: 500, category: "Toys" },
  { id: 88, name: "Board Game", price: 1200, category: "Toys" },
  { id: 89, name: "Remote Control Car", price: 2500, category: "Toys" },
  { id: 90, name: "Building Blocks", price: 1500, category: "Toys" },

  { id: 91, name: "Novel", price: 400, category: "Books" },
  { id: 92, name: "Programming Book", price: 900, category: "Books" },
  { id: 93, name: "Science Book", price: 600, category: "Books" },
  { id: 94, name: "History Book", price: 550, category: "Books" },
  { id: 95, name: "Math Book", price: 500, category: "Books" },
  { id: 96, name: "USB Cable", price: 300, category: "Electronics" },
  { id: 97, name: "Power Bank", price: 1800, category: "Electronics" },
  { id: 98, name: "Memory Card", price: 700, category: "Electronics" },
  { id: 99, name: "USB Flash Drive", price: 600, category: "Electronics" },
  { id: 100, name: "Power Adapter", price: 1000, category: "Electronics" }
];

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET product by ID
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});

// POST - Add a new product
app.post("/api/products", (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({
      message: "Name, price and category are required"
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// PUT - Update a product
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price, category } = req.body;

  product.name = name || product.name;
  product.price = price || product.price;
  product.category = category || product.category;

  res.json(product);
});

// DELETE - Delete a product
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const deletedProduct = products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
    product: deletedProduct[0]
  });
});

// Start server
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});