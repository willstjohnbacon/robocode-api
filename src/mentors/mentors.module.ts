import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { MentorsController } from './mentors.controller';
import { Mentor, MentorSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mentor.name, schema: MentorSchema }]),
  ],
  controllers: [MentorsController],
  providers: [MentorsService],
})
export class MentorsModule {}
