import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Payout } from '../../payouts/entities/payout.entity';

@Entity('bets')
export class Bet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  creator_id: string;

  @ManyToOne(() => User, (user) => user.created_bets)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  @Column({ nullable: true })
  acceptor_id: string;

  @ManyToOne(() => User, (user) => user.accepted_bets, { nullable: true })
  @JoinColumn({ name: 'acceptor_id' })
  acceptor: User;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text' })
  terms: string;

  @Column({ type: 'decimal' })
  stake_amount: string;

  @Column({ default: 'ETH' })
  currency: string;

  @Column({ default: 'pending' })
  status: 'pending' | 'available' | 'accepted' | 'resolved' | 'cancelled';

  @Column({ nullable: true })
  winner_id: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'winner_id' })
  winner: User;

  @Column({ nullable: true })
  resolver_id: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'resolver_id' })
  resolver: User;

  @Column({ nullable: true })
  resolved_at: Date;

  @Column({ nullable: true })
  expires_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Payout, (payout) => payout.bet)
  payouts: Payout[];
}
