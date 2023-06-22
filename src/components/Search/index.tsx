import { ChangeEvent, } from 'react'
import style from './Search.module.css'



type SearchBooksProps = {
 setSearchCategory: (category: string) => void;
 searchCategory: string;
 searchValue: string;
 setSearchValue: (value: string) => void;
};

const SearchBooks: React.FC<SearchBooksProps> = ({
 setSearchCategory,
 searchCategory,
 searchValue,
 setSearchValue,
}) => {
 const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
  setSearchValue(event.target.value);
 };

 const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
  setSearchCategory(event.target.value);
 };

 return (
  <div className={style.searchContainer}>
   <div>
    <select value={searchCategory} onChange={handleCategoryChange}>
     <option value="title">Поиск по названию</option>
     <option value="author">Поиск по автору</option>
    </select>
    <input type="text" className={style.input} value={searchValue} onChange={handleSearchChange} />
   </div>
  </div>
 );
};

export default SearchBooks;
