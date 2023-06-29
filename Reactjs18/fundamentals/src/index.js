import ReactDOM from 'react-dom/client';
import './index.css';

const data = [
  {
    id: 1,
    title: 'beautiful life',
    author: 'kedour el merhi Ba3ata',
    img: './images/book-1.jpg',
  },
  {
    id: 2,
    title: 'Ouzera',
    author: 'bou3lem hmida',
    img: './images/book-2.jpg',
  },
  {
    id: 3,
    title: 'kedour el haycha',
    author: 'denideni',
    img: './images/book-3.jpg',
  },
];

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

const Book = (props) => {
  // const { title, author, img, children } = props.book;
  const { id, title, author, img, children, getBook } = props;

  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img alt="book" src={img} />
      <h4>{title} </h4>
      <p>{author} </p>
      <button type="button" onClick={() => getBook(id)}>
        {/* <button type="button" onClick={getSingleBook}> */}
        get book
      </button>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
