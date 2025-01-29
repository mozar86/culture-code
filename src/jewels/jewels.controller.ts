import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { JewelsService } from './jewels.service';
import { CreateJewelDto } from './dto/create-jewel.dto';
import { UpdateJewelDto } from './dto/update-jewel.dto';

@Controller('jewels')
export class JewelsController {
  constructor(private readonly jewelsService: JewelsService) {}

  @Post()
  create(@Body() createJewelDto: CreateJewelDto) {
    return this.jewelsService.create(createJewelDto);
  }

  @Get()
  findAll() {
    return this.jewelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jewelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJewelDto: UpdateJewelDto) {
    return this.jewelsService.update(+id, updateJewelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jewelsService.remove(+id);
  }

  @Post(':id/assign')
  assign(@Param('id') id: string, @Body('userId') userId: number) {
    return this.jewelsService.assignToUser(+id, userId);
  }
}
