import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '082416',
      database: process.env.DB_NAME || 'culture_code',
      autoLoadEntities: true,
      synchronize: false, 
    }),
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}
