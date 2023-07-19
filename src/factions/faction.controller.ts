import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FactionService } from './faction.service';
import { Faction } from './models';

@Controller('factions')
export class FactionController {
  constructor(private factionService: FactionService) {}

  @Get('')
  getFactions() {
    return this.factionService.getFactions();
  }

  @Post('')
  addFaction(@Body() faction: Faction) {
    return this.factionService.addFaction(faction);
  }

  @Put(':id')
  updateFaction(@Param('id') id: string, @Body() faction: Faction) {
    return this.factionService.updateFaction(id, faction);
  }
}
