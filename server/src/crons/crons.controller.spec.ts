import { ScheduleModule } from '@nestjs/schedule';
import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsModule } from '../collections/collections.module';
import { EventsModule } from '../events/events.module';
import { CronsController } from './crons.controller';
import { CronsService } from './crons.service';

describe('CronsController', () => {
  let controller: CronsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventsModule, CollectionsModule, ScheduleModule.forRoot()],
      providers: [CronsService],
      controllers: [CronsController],
    }).compile();

    controller = module.get<CronsController>(CronsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
