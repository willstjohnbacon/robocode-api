import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/authentication/auth.module';
import { ThemeService } from './theme.service';
import { Theme, ThemeSchema } from './schemas';
import { ThemeController } from './theme.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Theme.name, schema: ThemeSchema }]),
    AuthModule,
  ],
  controllers: [ThemeController],
  providers: [ThemeService],
})
export class ThemeModule {}
