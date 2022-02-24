import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Put,
} from '@nestjs/common';
import {BookService} from './book.service';
import {BookCreateDto, BookDto, BookUpdateDto} from "./book.dto";

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {
  }

  @Post()
  create(@Body() createBookDto: BookCreateDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll(): Promise<BookDto[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BookDto> {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: BookUpdateDto): Promise<BookDto> {
    return this.bookService.update({id, ...dto});
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() dto: BookUpdateDto): Promise<BookDto> {
    return this.bookService.patch({id, ...dto});
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bookService.remove(+id);
  }
}
