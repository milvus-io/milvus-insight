import { ScheduleModule } from '@nestjs/schedule';
import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsModule } from '../collections/collections.module';
import { EventsModule } from '../events/events.module';
import { CronsService } from './crons.service';

describe('CronsService', () => {
  let service: CronsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventsModule, CollectionsModule, ScheduleModule.forRoot()],
      providers: [CronsService],
    }).compile();

    service = module.get<CronsService>(CronsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
