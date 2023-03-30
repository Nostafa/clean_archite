import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '../usecases-proxy/usecases-proxy';
import { ProductDto } from './product.dto';
import { addProductUseCases } from 'src/usecases/product/product.usecases';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(UsecasesProxyModule.POST_PRODUCT_USECASES_PROXY)
    private readonly addProductUseCaseProxy: UseCaseProxy<addProductUseCases>,
  ) {}

  @Post()
  async addProduct(@Body() createProdcut: ProductDto) {
    const prodcut = await this.addProductUseCaseProxy
      .getInstance()
      .execute(
        createProdcut.name,
        createProdcut.desc,
        createProdcut.stock,
        createProdcut.price,
      );
    return prodcut;
  }
}
