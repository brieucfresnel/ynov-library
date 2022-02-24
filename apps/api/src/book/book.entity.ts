import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose';

@Schema()
export class BookEntity {
  static collectionName = 'books';
  @Prop({required: true}) title: string;
  @Prop() summary: string;
  @Prop({required: true, type: Date}) publicationDate: Date;
  @Prop() likeCount: number;
}

export type BookEntityWithId = BookEntity & Pick<Document, 'id'>;
export type BookDocument = BookEntity & Document;
export const BookSchema = SchemaFactory.createForClass(BookEntity);
