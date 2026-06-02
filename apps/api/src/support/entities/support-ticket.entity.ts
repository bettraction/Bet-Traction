import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('support_tickets')
export class SupportTicket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.support_tickets)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  subject: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ default: 'open' })
  status: 'open' | 'in_progress' | 'resolved' | 'closed';

  @Column({ default: 'medium' })
  priority: 'low' | 'medium' | 'high';

  @Column({ nullable: true })
  assigned_to: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'assigned_to' })
  assigned_admin: User;

  @Column({ nullable: true })
  resolved_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
