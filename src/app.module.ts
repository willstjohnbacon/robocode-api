import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from './schema/teams.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://willstjohnbacon:UJqQNG9is1mH15ST@cluster0.wf2kn75.mongodb.net/?retryWrites=true&w=majority',{dbName: 'robocode_db'}),
  MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
