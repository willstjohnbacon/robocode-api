import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Theme, ThemeDocument } from './schemas';
import { Model } from 'mongoose';

@Injectable()
export class ThemeService {
  constructor(
    @InjectModel(Theme.name)
    private themeModel: Model<ThemeDocument>,
  ) {}

  getAllThemes() {
    return this.themeModel.find({});
  }

  getSelectedTheme() {
    return this.themeModel.findOne({ selected: true });
  }
}
