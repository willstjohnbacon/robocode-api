import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'theme' })
export class Theme {
  @Prop()
  themeName: string;

  @Prop()
  appTitle: string;

  @Prop()
  selected: boolean;
}

export type ThemeDocument = Document & Theme;

export const ThemeSchema = SchemaFactory.createForClass(Theme);
