export interface BookDto {
  id: string;
  title: string;
  summary: string;
  publicationDate: string;
  likeCount: number;
}

export type BookCreateDto = Omit<BookDto, 'id'>;
export type BookUpdateDto = Pick<BookDto, 'id'> & Partial<BookDto>;
