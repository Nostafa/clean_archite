import { ProductM } from 'src/domain/model/product';
import { ProductRepository } from 'src/domain/repositories/productRepository.interface';

export class addProductUseCases {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    name: string,
    desc: string,
    stock: number,
    price: number,
  ): Promise<ProductM> {
    const product = new ProductM();
    product.name = name;
    product.desc = desc;
    product.price = price;
    product.stock = stock;
    const result = await this.productRepository.insert(product);
    return result;
  }
}
