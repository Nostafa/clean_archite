import { Module } from '@nestjs/common';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { PrismaModule } from './infrastructure/config/prisma/prisma.module';

@Module({
  imports: [
    RepositoriesModule,
    UsecasesProxyModule,
    ControllersModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
