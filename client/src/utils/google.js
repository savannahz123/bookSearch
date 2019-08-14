import axios from "axios";

export default {
    getBooksByTitleOnly: (title) => {
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q="
            + "intitle:" + encodeURIComponent(title)
        );
    },

    getBooksByAuthorOnly: (author) => {
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q="
            + "inauthor:" + encodeURIComponent(author)
        );
    },

    getBooksByTitleAndAuthor: (title, author) => {
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q="
            + "intitle:" + encodeURIComponent(title)
            + "+"
            + "inauthor:" + encodeURIComponent(author)
        );
    }
}