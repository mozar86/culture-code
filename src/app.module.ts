import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        ssl: {
          rejectUnauthorized: false, 
        },
        // synchronize: true, 
      }),
    }),
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}


/*
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'), 
        autoLoadEntities: true,
        //synchronize: true, 
      }),
    }),
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}

JWT_SECRET=ml163086
JWT_EXPIRES_IN=3600
PORT=3000

DB_HOST=dpg-cudodblumphs73cqttq0-a
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=DYVByz5oqVveE5qcFco5LY70doOGbDiN
DB_NAME=culture_code_hh3f
*/