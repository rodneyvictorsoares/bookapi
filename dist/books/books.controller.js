"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
let BooksController = exports.BooksController = class BooksController {
    constructor() {
        this.books = [
            { id: '1', title: 'Memorias Postumas de Braz Cubas' },
            { id: '2', title: 'A Maquina do Tempo' },
            { id: '3', title: '2001 - Odisseia no Espaco' },
        ];
    }
    getAllBooks() {
        return this.books;
    }
    getBookById(id) {
        const book = this.books.find((book) => book.id.toLowerCase() === id.toLowerCase());
        return book ? book : 'Livro não localizado na base';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BooksController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BooksController.prototype, "getBookById", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books')
], BooksController);
//# sourceMappingURL=books.controller.js.map