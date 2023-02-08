import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
