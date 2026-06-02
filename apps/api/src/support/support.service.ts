import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportTicket } from './entities/support-ticket.entity';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(SupportTicket)
    private supportTicketsRepository: Repository<SupportTicket>,
  ) {}
}
