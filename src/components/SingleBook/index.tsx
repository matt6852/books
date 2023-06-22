import style from "../Booklist/BookList.module.css"
import { BookType } from '../../pages/Main';

type SingleBookType = {
 book: BookType;
};


const SingleBook = ({ book }: SingleBookType) => {
 return (
  <div className={style.bookTile} key={book.id}>
   <h3 className={style.bookTitle}>{book.title}</h3>
   <img className={style.bookImage} src={book.image} alt={book.title} />
   <p className={style.bookAuthor}>{book.author}</p>
  </div>
 )
}

export default SingleBook
