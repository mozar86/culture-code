import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jewels')
export class Jewel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  value: number;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ nullable: true })
  assignedToUserId: number;
}