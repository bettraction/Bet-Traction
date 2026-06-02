import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Bet } from '../../bets/entities/bet.entity';
import { Deposit } from '../../deposits/entities/deposit.entity';
import { Payout } from '../../payouts/entities/payout.entity';
import { Notification } from '../../notifications/entities/notification.entity';
import { SupportTicket } from '../../support/entities/support-ticket.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  wallet_address: string;

  @Column({ unique: true, nullable: true })
  username: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'decimal', default: 0 })
  balance: string;

  @Column({ type: 'decimal', default: 0 })
  total_wagered: string;

  @Column({ type: 'decimal', default: 0 })
  total_won: string;

  @Column({ type: 'int', default: 0 })
  wins: number;

  @Column({ type: 'int', default: 0 })
  losses: number;

  @Column({ default: false })
  is_admin: boolean;

  @Column({ default: false })
  is_banned: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Bet, (bet) => bet.creator)
  created_bets: Bet[];

  @OneToMany(() => Bet, (bet) => bet.acceptor)
  accepted_bets: Bet[];

  @OneToMany(() => Deposit, (deposit) => deposit.user)
  deposits: Deposit[];

  @OneToMany(() => Payout, (payout) => payout.user)
  payouts: Payout[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToMany(() => SupportTicket, (ticket) => ticket.user)
  support_tickets: SupportTicket[];
}
