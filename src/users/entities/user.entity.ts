import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  status: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
