const Book = (props) => {
  // const { title, author, img, children } = props.book;
  const { id, title, author, img, children, getBook, number } = props;

  //   const getSingleBook = () => {
  //     getBook(id);
  //   };

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
      <span className="number">{`# ${number + 1}`} </span>
    </article>
  );
};

export default Book;
