export interface IBook {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    ratings: number;
    category: string;
    image: string;
    author: {
        name: string;
        about: string;
    };
}

export interface ICategory {
    _id: string;
    name: string;
    books: Book[];
}
