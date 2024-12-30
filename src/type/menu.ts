export interface MenuTpe {
  _id: string | number; // Unique identifier for the product
  name: string; // Name of the product
  review: number; // Review score, e.g., 4.5
  schedule: string; // When the product is available, e.g., "morning"
  description: string; // Description of the product
  image: string; // URL of the product image
  category: string; // Category of the product
  price: number; // Price of the product
  off?: number; // Discounted price or percentage
}
