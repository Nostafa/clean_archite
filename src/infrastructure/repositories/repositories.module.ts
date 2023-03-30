import { Module } from '@nestjs/common';
import { DatabaseProductRepository } from './product.repository';
import { PrismaModule } from '../config/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DatabaseProductRepository],
  exports: [DatabaseProductRepository],
})
export class RepositoriesModule {}
