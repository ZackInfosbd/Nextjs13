import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <h1>Best amazon books sellers</h1>

      <Book />
      <Book />
      <Book />
    </section>
  );
};

const author = 'this is an author';
const Book = () => {
  const title = 'this is a title';
  return (
    <article className="book">
      <img alt="book" src="./images/book-1.jpg" />
      <h4>{title} </h4>
      <p>{author} </p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
