import { useReducer } from 'react';
import { reducer, defaultState } from './reducer';
import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from './actions';

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };

  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
