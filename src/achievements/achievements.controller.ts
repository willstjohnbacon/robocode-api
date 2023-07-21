import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { Achievement } from './models';
import { Team } from 'src/teams/models';
import { AuthGuard } from 'src/authentication/auth.guard';

@Controller('achievements')
@UseGuards(AuthGuard)
export class AchievementsController {
  constructor(private achievementsService: AchievementsService) {}

  @Get('')
  getachievements() {
    return this.achievementsService.getAchievements();
  }

  @Post('')
  addAchievement(@Body() achievement: Achievement) {
    return this.achievementsService.addAchievement(achievement);
  }

  @Get(':id')
  getMentorDetails(@Param('id') id: string) {
    return this.achievementsService.getAchievementDetails(id);
  }

  @Put(':id')
  updateAchievement(@Param('id') id: string, @Body() achievement: Achievement) {
    return this.achievementsService.updateAchievement(id, achievement);
  }

  @Delete(':id')
  deleteAchievement(@Param('id') id: string) {
    return this.achievementsService.deleteAchievement(id);
  }
}
