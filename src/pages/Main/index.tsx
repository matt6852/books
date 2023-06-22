import { useState } from 'react';
import style from './Main.module.css'
import BookList from '../../components/Booklist';
import SearchBooks from '../../components/Search';

export type BookType = {
 id: number,
 title: string
 author: string
 image: string
}
const books: BookType[] = [
 {
  id: 1,
  title: 'НаименованиеОченьИнтереснойКниги1',
  author: 'АвторКнигиНомер1',
  image: 'http://i.pravatar.cc/?u=213123'
 },
 {
  id: 2,
  title: 'НаименованиеОченьИнтереснойКниги2',
  author: 'АвторКнигиНомер2',
  image: 'http://i.pravatar.cc/?u=2131232'
 },
 {
  id: 3,
  title: 'НаименованиеОченьИнтереснойКниги3',
  author: 'АвторКнигиНомер3',
  image: 'http://i.pravatar.cc/?u=213125'
 },
 {
  id: 4,
  title: 'НаименованиеОченьИнтереснойКниги4',
  author: 'АвторКнигиНомер4',
  image: 'http://i.pravatar.cc/?u=213121'
 },
 {
  id: 5,
  title: 'НаименованиеОченьИнтереснойКниги5',
  author: 'АвторКнигиНомер5',
  image: 'http://i.pravatar.cc/?u=21312312'
 },
 {
  id: 6,
  title: 'НаименованиеОченьИнтереснойКниги6',
  author: 'АвторКнигиНомер6',
  image: 'http://i.pravatar.cc/?u=2131255'
 },
 {
  id: 7,
  title: 'НаименованиеОченьИнтереснойКниги7',
  author: 'АвторКнигиНомер7',
  image: 'http://i.pravatar.cc/?u=2131211'
 },
 {
  id: 8,
  title: 'НаименованиеОченьИнтереснойКниги8',
  author: 'АвторКнигиНомер8',
  image: 'http://i.pravatar.cc/?u=2131244'
 },
 {
  id: 9,
  title: 'НаименованиеОченьИнтереснойКниги9',
  author: 'АвторКнигиНомер9',
  image: 'http://i.pravatar.cc/?u=21312356'
 },
 {
  id: 10,
  title: 'НаименованиеОченьИнтереснойКниги10',
  author: 'АвторКнигиНомер10',
  image: 'http://i.pravatar.cc/?u=21312365'
 },
 {
  id: 11,
  title: 'НаименованиеОченьИнтереснойКниги11',
  author: 'АвторКнигиНомер11',
  image: 'http://i.pravatar.cc/?u=21312332'
 },
 {
  id: 12,
  title: 'НаименованиеОченьИнтереснойКниги12',
  author: 'АвторКнигиНомер12',
  image: 'http://i.pravatar.cc/?u=2131223'
 },
 {
  id: 13,
  title: 'НаименованиеОченьИнтереснойКниги13',
  author: 'АвторКнигиНомер13',
  image: 'http://i.pravatar.cc/?u=21312343'
 },
 {
  id: 14,
  title: 'НаименованиеОченьИнтереснойКниги14',
  author: 'АвторКнигиНомер14',
  image: 'http://i.pravatar.cc/?u=213123ee'
 },

];
function Main() {
 const [searchValue, setSearchValue] = useState('');
 const [searchCategory, setSearchCategory] = useState('title');
 const filteredBooks: BookType[] = books.filter((book) => {
  if (searchCategory === 'title') {
   return book.title.toLowerCase().includes(searchValue.toLowerCase());
  } else if (searchCategory === 'author') {
   return book.author.toLowerCase().includes(searchValue.toLowerCase());
  }
  return false;
 })
 return (
  <main>
   <h2 className={style.header}>Корпоративная библиотека</h2>
   <div className={style.userInfo} >
    <div className={style.userAva}>
     <img className={style.ava} src="http://i.pravatar.cc/?u=0" alt="ava" />
    </div>
   </div>
   {/* Поиск */}
   <SearchBooks
    searchCategory={searchCategory}
    setSearchCategory={setSearchCategory}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
   />
   {/* Список книг */}
   <BookList filteredBooks={filteredBooks} />
  </main>
 )
}

export default Main