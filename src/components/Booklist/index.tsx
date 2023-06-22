import { BookType } from '../../pages/Main';
import SingleBook from '../SingleBook';
import style from './BookList.module.css';

type BookListProps = {
 filteredBooks: BookType[];
};

const BookList: React.FC<BookListProps> = ({ filteredBooks }) => {
 return (
  <div className={style.bookList}>
   {filteredBooks.map((book) => (
    <SingleBook key={book.id} book={book} />
   ))}
  </div>
 );
};

export default BookList;
