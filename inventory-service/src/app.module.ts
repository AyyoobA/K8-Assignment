import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entity/product.entity';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-service',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'cosmos',
      entities: [Product],
      synchronize: true, //only on dev
    }),
  ],
})
export class AppModule {}
