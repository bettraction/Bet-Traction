import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Bet } from '../../bets/entities/bet.entity';

@Entity('payouts')
export class Payout {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.payouts)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  bet_id: string;

  @ManyToOne(() => Bet, (bet) => bet.payouts)
  @JoinColumn({ name: 'bet_id' })
  bet: Bet;

  @Column({ type: 'decimal' })
  amount: string;

  @Column({ default: 'ETH' })
  currency: string;

  @Column({ unique: true, nullable: true })
  transaction_hash: string;

  @Column({ default: 'pending' })
  status: 'pending' | 'processing' | 'completed' | 'failed';

  @Column({ nullable: true })
  processed_by: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'processed_by' })
  processor: User;

  @Column({ nullable: true })
  processed_at: Date;

  @CreateDateColumn()
  created_at: Date;
}
