import ReactDOM from 'react-dom/client';
import './index.css';

const data = [
  {
    title: 'beautiful life',
    author: 'kedour el merhi Ba3ata',
    img: './images/book-1.jpg',
  },
  {
    title: 'Ouzera',
    author: 'bou3lem hmida',
    img: './images/book-2.jpg',
  },
  {
    title: 'kedour el haycha',
    author: 'denideni',
    img: './images/book-3.jpg',
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <h1>Best amazon books sellers</h1>
      {data.map((item) => {
        return (
          <ul key={item}>
            <li>
              <Book title={item.title} author={item.author} img={item.img}>
                <button>click me</button>
              </Book>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img alt="book" src={props.img} />
      <h4>{props.title} </h4>
      <p>{props.author} </p>
      {props.children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
