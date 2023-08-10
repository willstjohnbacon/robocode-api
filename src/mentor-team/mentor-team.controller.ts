import {
  Body,
  Controller,
  Delete,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MentorTeamService } from './mentor-team.service';
import { AssignedTeam } from './models';
import { AuthGuard } from 'src/authentication/auth.guard';
import { Team } from 'src/teams/schemas';

@Controller('assignedTeams')
@UseGuards(AuthGuard)
export class AssignedTeamController {
  constructor(private mentorTeamService: MentorTeamService) {}

  @Put('')
  updateAssignedTeam(@Body() team: Team) {
    console.log(
      `Updating mentor with Username: ${team.assignedMentor} with team name: ${team.name}`,
    );
    return this.mentorTeamService.updateMentorsAssignedTeam(team);
  }

  @Delete(':id')
  removeAssignedTeam(@Param('id') mentorId: string) {
    return this.mentorTeamService.removeMentorsAssignedTeam(mentorId);
  }
}

@Controller('assignedMentors')
export class AssignedMentorController {
  constructor(private mentorTeamService: MentorTeamService) {}

  @Put(':id')
  updateAssignedMentor(
    @Param('id') id: string,
    @Body() assignedTeam: AssignedTeam,
  ) {
    console.log(`Updating team with ID: ${id} with ${assignedTeam}`);
    return this.mentorTeamService.updateTeamsAssignedMentor(id, assignedTeam);
  }
}
