import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/authentication/auth.guard';
import { GuideService } from './guide.service';

@Controller('guide')
@UseGuards(AuthGuard)
export class GuideController {
  constructor(private guideService: GuideService) {}

  @Get('')
  getMentors() {
    return this.guideService.getGuide();
  }
}
