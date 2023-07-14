import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { Mentor } from './schemas';

@Controller('mentors')
export class MentorsController {
  constructor(private mentorsService: MentorsService) {}

  @Get('')
  getMentors() {
    return this.mentorsService.getMentors();
  }

  @Get(':id')
  getMentorDetails(@Param('id') id: string) {
    return this.mentorsService.getMentorDetails(id);
  }

  @Post('')
  addMentor(@Body() mentor: Mentor) {
    return this.mentorsService.addMentor(mentor);
  }

  @Put(':id')
  updateMentor(@Param('id') id: string, @Body() mentor: Mentor) {
    return this.mentorsService.updateMentor(id, mentor);
  }

  @Delete(':id')
  removeMentor(@Param('id') id: string) {
    return this.mentorsService.removeMentor(id);
  }
}
