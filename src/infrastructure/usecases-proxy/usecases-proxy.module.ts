import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseProductRepository } from '../repositories/product.repository';
import { UseCaseProxy } from './usecases-proxy';
import { RepositoriesModule } from '../repositories/repositories.module';
import { addProductUseCases } from 'src/usecases/product/product.usecases';

@Module({
  imports: [RepositoriesModule],
})
export class UsecasesProxyModule {
  static POST_PRODUCT_USECASES_PROXY = 'postProductUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseProductRepository],
          provide: UsecasesProxyModule.POST_PRODUCT_USECASES_PROXY,
          useFactory: (productRepository: DatabaseProductRepository) =>
            new UseCaseProxy(new addProductUseCases(productRepository)),
        },
      ],
      exports: [UsecasesProxyModule.POST_PRODUCT_USECASES_PROXY],
    };
  }
}
