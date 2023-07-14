import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('')
  checkMentorAuth(@Body() mentorLogin) {
    return this.authService.checkMentorAuth(mentorLogin);
  }
}
