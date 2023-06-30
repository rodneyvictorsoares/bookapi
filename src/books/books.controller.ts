import { Controller, Get, Param } from '@nestjs/common';

@Controller('books')
export class BooksController {
    //vetor de mentirinha para simular banco de dados
    private books = [
        {id: '1', title: 'Memorias Postumas de Braz Cubas'},
        {id: '2', title: 'A Maquina do Tempo'},
        {id: '3', title: '2001 - Odisseia no Espaco'},
    ];

    @Get()
    getAllBooks(): any[] {
        return this.books;
    }

    @Get(':id')
    getBookById(@Param('id') id: string): any {
        const book = this.books.find((book) => book.id.toLowerCase() === id.toLowerCase());
        return book ? book : 'Livro não localizado na base';
    }
}
