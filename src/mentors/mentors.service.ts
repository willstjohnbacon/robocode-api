import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mentor, MentorDocument } from './schemas';
import { Model, Types } from 'mongoose';

@Injectable()
export class MentorsService {
  constructor(
    @InjectModel(Mentor.name)
    private mentorModel: Model<MentorDocument>,
  ) {}

  getMentors() {
    return this.mentorModel.find({});
  }

  getMentorDetails(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid Mentor ID');
    }
    return this.mentorModel.findOne({ _id: id });
  }

  async addMentor(mentor: Mentor) {
    const exists = await this.mentorModel.exists({ username: mentor.username });
    if (exists) {
      console.log('person exists');
      throw new BadRequestException('Mentor username is already Taken');
    }
    return this.mentorModel.create(mentor);
  }

  updateMentor(id: string, mentor: Mentor) {
    return this.mentorModel.findOneAndUpdate({ _id: id }, mentor);
  }

  removeMentor(id: string) {
    return this.mentorModel.findOneAndDelete({ _id: id });
  }
}
