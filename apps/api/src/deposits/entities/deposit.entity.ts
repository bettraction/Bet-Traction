import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('deposits')
export class Deposit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.deposits)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'decimal' })
  amount: string;

  @Column({ default: 'ETH' })
  currency: string;

  @Column({ unique: true })
  transaction_hash: string;

  @Column({ default: 'pending' })
  status: 'pending' | 'confirmed' | 'failed';

  @Column({ type: 'int', nullable: true })
  block_number: number;

  @Column({ nullable: true })
  confirmed_at: Date;

  @CreateDateColumn()
  created_at: Date;
}
