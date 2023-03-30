import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/domain/repositories/productRepository.interface';
import { PrismaService } from '../config/prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';
@Injectable()
export class DatabaseProductRepository implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async insert(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prismaService.product.create({ data });
  }
}
