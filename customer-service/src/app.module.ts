import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers/entity/customer.entity';

@Module({
  imports: [
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-service',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'cosmos',
      entities: [Customer],
      synchronize: true, //only on dev
    }),
  ],
})
export class AppModule {}
