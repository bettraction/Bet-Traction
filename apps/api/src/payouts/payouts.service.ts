import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payout } from './entities/payout.entity';

@Injectable()
export class PayoutsService {
  constructor(
    @InjectRepository(Payout)
    private payoutsRepository: Repository<Payout>
  ) {}
}
