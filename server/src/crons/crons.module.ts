import { Module } from '@nestjs/common';
import { CollectionsModule } from '../collections/collections.module';
import { EventsModule } from '../events/events.module';
import { CronsService } from './crons.service';
import { CronsController } from './crons.controller';

@Module({
  imports: [EventsModule, CollectionsModule],
  providers: [CronsService],
  controllers: [CronsController],
})
export class CronsModule {}
