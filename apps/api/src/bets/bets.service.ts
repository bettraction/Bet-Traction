import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bet } from './entities/bet.entity';

@Injectable()
export class BetsService {
  constructor(
    @InjectRepository(Bet)
    private betsRepository: Repository<Bet>,
  ) {}
}
