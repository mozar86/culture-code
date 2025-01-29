import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';

describe('ProductsService', () => {
    let service: ProductsService;
    const mockProductRepository = {
      find: jest.fn().mockResolvedValue([{
        id: 1,
        name: 'Produto A',
        price: 100,
        isAvailable: true,
      }]),
      findOne: jest.fn().mockResolvedValue({
        id: 1,
        name: 'Produto A',
        price: 100,
        isAvailable: true,
      }),
      save: jest.fn().mockResolvedValue({ id: 1, name: 'Produto A', price: 100 }),
      update: jest.fn().mockResolvedValue({ affected: 1 }),
      delete: jest.fn().mockResolvedValue({ affected: 1 }),
    };
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          ProductsService,
          {
            provide: getRepositoryToken(Product),
            useValue: mockProductRepository,
          },
        ],
      }).compile();
  
      service = module.get<ProductsService>(ProductsService);
    });
  
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  
    it('should return all products', async () => {
      const products = await service.findAll();
      expect(products).toEqual([{
        id: 1,
        name: 'Produto A',
        price: 100,
        isAvailable: true,
      }]);
    });
  });