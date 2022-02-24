import {BookDocument, BookEntity, BookEntityWithId} from "./book.entity";
import {BookCreateDto, BookDto, BookUpdateDto} from "./book.dto";

export const bookDocumentToDto = (document: BookDocument): BookDto => ({
  id: document.id,
  title: document.title,
  summary: document.summary,
  publicationDate: document.publicationDate.toISOString(),
  likeCount: document.likeCount
})

export const bookDtoToEntity = (dto: BookCreateDto): BookEntity => ({
  title: dto.title,
  summary: dto.summary,
  publicationDate: new Date(dto.publicationDate),
  likeCount: dto.likeCount
})

export const bookPatchDtoToEntity = (dto: BookUpdateDto): BookEntityWithId => ({
  id: dto.id,
  title: dto.title,
  summary: dto.summary,
  publicationDate: new Date(dto.publicationDate),
  likeCount: dto.likeCount
})

export const bookUpdateDtoToEntity = (dto: BookUpdateDto): BookEntityWithId => ({
  id: dto.id,
  title: dto.title || null,
  summary: dto.summary || null,
  publicationDate: new Date(dto.publicationDate) || null,
  likeCount: dto.likeCount || null
})
