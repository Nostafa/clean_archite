import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/domain/repositories/productRepository.interface';
import { PrismaService } from '../config/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ProductM } from 'src/domain/model/product';
@Injectable()
export class DatabaseProductRepository implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async insert(data: Prisma.productCreateInput): Promise<ProductM> {
    return this.prismaService.product.create({ data });
  }
}
