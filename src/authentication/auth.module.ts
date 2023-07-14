import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Mentor, MentorSchema } from 'src/mentors/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mentor.name, schema: MentorSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
