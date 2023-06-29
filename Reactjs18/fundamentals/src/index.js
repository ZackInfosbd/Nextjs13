import ReactDOM from 'react-dom/client';
import './index.css';
import { data } from './data';
import Book from './Book';

const BookList = () => {
  const getBook = (id) => {
    const book = data.find((item) => item.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      <h1>Best amazon books sellers</h1>
      {data.map((item) => {
        // const { id, title, author, img } = item;
        return (
          <ul key={item.id}>
            <li>
              {/* <Book title={title} author={author} img={img}> */}
              {/* <Book book={item}> */}
              <Book {...item} getBook={getBook}></Book>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
