export class Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  imageUrl: string;
  description: string;
  constructor(
    id: number,
    name: string,
    price: number,
    categoryId: number,
    imageUrl: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
