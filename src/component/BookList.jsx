import { React, useState } from "react";
import style from "../styles/BookList.module.css";
// import { Link } from "react-router-dom";

const Booklist = () => {

    const books = [
      "Name of the Wind",
      "The Wise Man's Fear",
      "Kafka on the Shore",
      "The Master and the Margarita",
    ];
    const [BookList, setBookList] = useState(books);
    const addBook = (event)=>{
        event.preventDefault();
        const newBook = event.target[0].value;
        setBookList((prevBooks)=>(
            [...prevBooks, newBook]));  //never update your state directly
        console.log(newBook);
        event.target[0].value = "";
        }


        const handleDelete = (index) => {
          setBookList(BookList.filter((_, i) => i != index))
        }
    


  return (
    <div id={style.wrapper}>
      <header>
        <div id={style.pageBanner}>
          <h1 className={style.title}> Book Collections</h1>
          <p>Books</p>
          <form id={style.searchBooks}>
            <input className="type" type="text" placeholder="Search books..." />
          </form>
        </div>
      </header>
      <div id={style.bookList}>
        <h2 className={style.title}>Books to Read</h2>
        <ul>
          {BookList.map((books, index) => (
            <li key={index}>
              <span className={style.name}>{books}</span>
              <span
                onClick={()=>handleDelete(index)}
                className={style.delete}>delete</span>
            </li>
          ))}
          {/* <li>
            <span className={style.name}>Name of the Wind</span>
            <span className={style.delete}>delete</span>
          </li>
          <li>
            <span className={style.name}> The Wise Man's Fear</span>
            <span className={style.delete}>delete</span>
          </li>
          <li>
            <span className={style.name}> Kafka on the Shore</span>
            <span className={style.delete}>delete</span>
          </li>
          <li>
            <span className={style.name}> The Master and the Margarita</span>
            <span className={style.delete}>delete</span>
          </li> */}
        </ul>
      </div>
      <form onSubmit={addBook} id={style.addBook}>
        <input onClick={() => handleDelete(index)} type="text" placeholder="Add a book..."/>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Booklist;
