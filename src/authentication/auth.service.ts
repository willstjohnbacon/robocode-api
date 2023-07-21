import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Mentor, MentorDocument } from 'src/mentors/schemas';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Mentor.name)
    private mentorModel: Model<MentorDocument>,
  ) {}

  async checkMentorAuth(mentorLogin) {
    const output = await this.mentorModel
      .find({
        username: mentorLogin.username,
        password: mentorLogin.password,
      })
      .then((mentor) => {
        return mentor.filter(
          (x) =>
            x.username === mentorLogin.username &&
            x.password === mentorLogin.password,
        );
      });
    return output[0];
  }

  getCredentials(user) {
    if (user) {
      const credentials = atob(user).split(':');
      const username = credentials[0];
      const password = credentials[1];
      return { username, password };
    }
  }
}
