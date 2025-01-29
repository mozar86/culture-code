import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Jewel } from './entities/jewel.entity';
import { CreateJewelDto } from './dto/create-jewel.dto';
import { UpdateJewelDto } from './dto/update-jewel.dto';

@Injectable()
export class JewelsService {
  constructor(
    @InjectRepository(Jewel)
    private readonly jewelRepository: Repository<Jewel>,
  ) {}

  create(createJewelDto: CreateJewelDto): Promise<Jewel> {
    const jewel = this.jewelRepository.create(createJewelDto);
    return this.jewelRepository.save(jewel);
  }

  findAll(): Promise<Jewel[]> {
    return this.jewelRepository.find();
  }

  findOne(id: number): Promise<Jewel | null> {
    return this.jewelRepository.findOne({ where: { id } });
  }

  update(id: number, updateJewelDto: UpdateJewelDto): Promise<any> {
    return this.jewelRepository.update(id, updateJewelDto);
  }

  remove(id: number): Promise<any> {
    return this.jewelRepository.delete(id);
  }

  async assignToUser(jewelId: number, userId: number): Promise<string> {
    const jewel = await this.jewelRepository.findOne({ where: { id: jewelId } });
    if (!jewel || !jewel.isAvailable) {
      throw new Error('Jewel not available');
    }
    jewel.isAvailable = false;
    jewel.assignedToUserId = userId;
    await this.jewelRepository.save(jewel);
    return `Jewel ${jewel.name} assigned to user ${userId} successfully!`;
  }
}
