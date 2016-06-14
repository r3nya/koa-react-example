export {
  SET_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants';

export const set = (value) => (
  {
    type: SET_COUNTER,
    payload: value
  }
);

export const increment = () => (
  { type: INCREMENT_COUNTER }
);

export const decrement = () => (
  { type: DECREMENT_COUNTER }
);
