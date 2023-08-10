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
import { TeamsService } from './teams.service';
import { Team } from './schemas';
import { AchievementUpdate } from './models';
import { MentorTeamService } from 'src/mentor-team/mentor-team.service';
import { AuthGuard } from 'src/authentication/auth.guard';

@Controller('teams')
@UseGuards(AuthGuard)
export class TeamsController {
  constructor(
    private teamsService: TeamsService,
    private mentorTeamService: MentorTeamService,
  ) {}

  @Get('')
  getTeams() {
    return this.teamsService.getTeams();
  }

  @Post('')
  addTeam(@Body() team: Team) {
    return this.teamsService.addTeam(team);
  }

  @Delete(':id')
  removeTeam(@Param('id') id: string) {
    // this.mentorTeamService.removeMentorsAssignedTeam(mentorId);

    return this.teamsService.removeTeam(id);
  }

  @Put(':id')
  updateTeam(@Param('id') id: string, @Body() team: Team) {
    return this.teamsService.updateTeam(id, team);
  }

  @Get(':id')
  getTeamDetails(@Param('id') id: string) {
    return this.teamsService.getTeamDetails(id);
  }
}

@Controller('teamAchievements')
export class TeamAchievementsController {
  constructor(private teamsService: TeamsService) {}

  @Put(':id')
  updateTeamAchievements(
    @Param('id') teamId: string,
    @Body() achievementUpdate: AchievementUpdate,
  ) {
    this.teamsService.updateTeamScore(teamId, achievementUpdate.points);

    return this.teamsService.updateTeamAchievements(
      teamId,
      achievementUpdate.achievementId,
      achievementUpdate.completed,
    );
  }
}
