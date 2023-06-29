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
  return (
    <section className="booklist">
      <h1>Best amazon books sellers</h1>
      <EventExample />
      {data.map((item) => {
        // const { id, title, author, img } = item;
        return (
          <ul key={item.id}>
            <li>
              {/* <Book title={title} author={author} img={img}> */}
              {/* <Book book={item}> */}
              <Book {...item}>
                <button>click me</button>
              </Book>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

const EventExample = () => {
  const onClickEvent = () => {
    alert('on click Event');
  };

  const handleChangeEvent = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('the user has entred a value');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <section>
      <h3>Event Example</h3>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          name="product"
          style={{ margin: '1rem 0' }}
          onChange={handleChangeEvent}
        />
      </form>
      <button onClick={onClickEvent}>click me</button>
    </section>
  );
};

const Book = (props) => {
  // const { title, author, img, children } = props.book;
  const { title, author, img, children } = props;
  return (
    <article className="book">
      <img alt="book" src={img} />
      <h4>{title} </h4>
      <p>{author} </p>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
