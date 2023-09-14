import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/authentication/auth.guard';
import { ThemeService } from './theme.service';

@Controller('theme')
@UseGuards(AuthGuard)
export class ThemeController {
  constructor(private adminService: ThemeService) {}

  @Get('')
  getAllThemes() {
    return this.adminService.getAllThemes();
  }

  @Get('selected')
  getSelectedTheme() {
    return this.adminService.getSelectedTheme();
  }
}
