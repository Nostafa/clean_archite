import { ProductM } from 'src/domain/model/product';

export interface ProductRepository {
  insert(product: ProductM): Promise<ProductM>;
}
