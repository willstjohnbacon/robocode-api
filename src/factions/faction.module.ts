import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FactionController } from './faction.controller';
import { FactionService } from './faction.service';
import { Faction, FactionSchema } from './schemas';
import { AuthService } from 'src/authentication/auth.service';
import { AuthGuard } from 'src/authentication/auth.guard';
import { AuthModule } from 'src/authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Faction.name, schema: FactionSchema }]),
    AuthModule,
  ],
  controllers: [FactionController],
  providers: [FactionService],
})
export class FactionModule {}
