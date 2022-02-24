import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {BookDocument, BookEntity, BookEntityWithId} from "./book.entity";
import {BookCreateDto, BookDto, BookUpdateDto} from "./book.dto";
import {bookDocumentToDto, bookDtoToEntity, bookPatchDtoToEntity, bookUpdateDtoToEntity} from './book.mapper';

@Injectable()
export class BookService {

  constructor(
    @InjectModel(BookEntity.collectionName) private model: Model<BookDocument>
  ) {

  }

  create(dto: BookCreateDto): Promise<BookDto> {
    const entity = bookDtoToEntity(dto);
    return this.model.create(entity)
      .then(bookDocumentToDto)
  }

  findAll(): Promise<BookDto[]> {
    return this.model.find().exec()
      .then(entities => entities.map(bookDocumentToDto));
  }

  findOne(id: string): Promise<BookDto> {
    return this.model.findById(id).exec()
      .then(bookDocumentToDto)
  }

  patch(dto: BookUpdateDto): Promise<BookDto> {
    const entity = bookPatchDtoToEntity(dto);
    return this.model.findByIdAndUpdate(entity.id, entity, {new: true}).exec()
      .then(bookDocumentToDto);
  }

  update(dto: BookUpdateDto): Promise<BookDto> {
    const entity = bookUpdateDtoToEntity(dto);
    return this.model.findByIdAndUpdate(entity.id, entity, {new: true}).exec()
      .then(bookDocumentToDto);
  }

  remove(id: number) {
    return Promise.resolve(null);
  }
}
