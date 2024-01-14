import axios from "axios";
import { apiURL } from "./constants";

export const getCategories = async () => {
    const response = await axios.get(`${apiURL}api/categories`);
    const categories = await response.data;

    return categories;
};

export const getBooksOnSale = async () => {
    const response = await axios.get(`${apiURL}api/books/sale`);
    const booksOnSale = await response.data;

    return booksOnSale;
};
