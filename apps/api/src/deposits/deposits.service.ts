import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deposit } from './entities/deposit.entity';

@Injectable()
export class DepositsService {
  constructor(
    @InjectRepository(Deposit)
    private depositsRepository: Repository<Deposit>,
  ) {}
}
