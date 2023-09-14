import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsModule } from './teams/teams.module';
import { config as dotenvConfig } from 'dotenv';
import { MentorsModule } from './mentors/mentors.module';
import { AchievementsModule } from './achievements/achievements.module';
import { AuthModule } from './authentication/auth.module';
import { MentorTeamModule } from './mentor-team/mentor-team.module';
import { FactionModule } from './factions/faction.module';
import { GuideModule } from './guide/guide.module';
import { ThemeModule } from './theme/theme.module';
dotenvConfig();

const conn = process.env.DB_CONN;

if (!conn) {
  throw new Error(
    'No connection string provided. Please provide a MongoDB connection string in process.env.DB_CONN',
  );
}

@Module({
  imports: [
    MongooseModule.forRoot(conn),
    TeamsModule,
    MentorsModule,
    AchievementsModule,
    AuthModule,
    MentorTeamModule,
    FactionModule,
    ThemeModule,
    GuideModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
