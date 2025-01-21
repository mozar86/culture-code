import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Products')
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso.' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ status: 200, description: 'Lista de produtos retornada com sucesso.' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um produto por ID' })
  @ApiResponse({ status: 200, description: 'Produto retornado com sucesso.' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um produto' })
  @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um produto' })
  @ApiResponse({ status: 200, description: 'Produto removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Post(':id/redeem')
  @ApiOperation({ summary: 'Resgatar um produto' })
  @ApiResponse({ status: 200, description: 'Produto resgatado com sucesso.' })
  redeem(@Param('id') id: string, @Body('userId') userId: number) {
    return this.productsService.redeemProduct(+id, userId);
  }
}
