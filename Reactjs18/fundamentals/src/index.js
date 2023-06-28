import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <>
      <h3>
        <Person />
        <Message />
      </h3>
    </>
  );
}

const Person = () => <h1>John Doe</h1>;

const Message = () => {
  return <h2>Hello there </h2>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
