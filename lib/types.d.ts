export interface IBook {
    _id: String;
    name: String;
    description: String;
    price: Number;
    stock: Number;
    ratings: Number;
    category: String;
    image: String;
    author: {
        name: String;
        about: String;
    };
}

export interface ICategory {
    name: String;
    books: Book[];
}
