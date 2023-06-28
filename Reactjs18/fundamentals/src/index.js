import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <h1>Best amazon books sellers</h1>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img alt="book-image" src="./images/book-1.jpg" />;

const Title = () => <h4>this is a title</h4>;

const Author = () => <p>this is an author</p>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
