import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { MentorsController } from './mentors.controller';
import { Mentor, MentorSchema } from './schemas';
import { AuthService } from 'src/authentication/auth.service';
import { AuthModule } from 'src/authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mentor.name, schema: MentorSchema }]),
    AuthModule,
  ],
  controllers: [MentorsController],
  providers: [MentorsService, AuthService],
})
export class MentorsModule {}
