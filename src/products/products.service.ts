import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }

  async redeemProduct(id: number, userId: number): Promise<string> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product || !product.isAvailable) {
      throw new Error('Product not available');
    }
    // Simulação: Reduzir joias do usuário
    product.isAvailable = false;
    product.ownerId = userId;
    await this.productRepository.save(product);
    return `Product ${product.name} redeemed successfully!`;
  }
}
