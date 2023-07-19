import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FactionController } from './faction.controller';
import { FactionService } from './faction.service';
import { Faction, FactionSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Faction.name, schema: FactionSchema }]),
  ],
  controllers: [FactionController],
  providers: [FactionService],
})
export class FactionModule {}
