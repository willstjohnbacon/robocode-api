import { Body, Controller, Param, Put } from '@nestjs/common';
import { MentorTeamService } from './mentor-team.service';
import { AssignedTeam } from './models';

@Controller('assignedTeams')
export class AssignedTeamController {
  constructor(private mentorTeamService: MentorTeamService) {}

  @Put(':id')
  updateAssignedTeam(
    @Param('id') id: string,
    @Body() assignedTeam: AssignedTeam,
  ) {
    console.log(`Updating mentor with ID: ${id} with`, assignedTeam);
    return this.mentorTeamService.updateMentorsAssignedTeam(id, assignedTeam);
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
