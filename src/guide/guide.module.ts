import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/authentication/auth.module';
import { GuideController } from './guide.controller';
import { GuideService } from './guide.service';
import { Guide, GuideSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guide.name, schema: GuideSchema }]),
    AuthModule,
  ],
  controllers: [GuideController],
  providers: [GuideService],
})
export class GuideModule {}
