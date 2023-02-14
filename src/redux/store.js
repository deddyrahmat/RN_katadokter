import {legacy_createStore as createStore} from 'redux';

// const [profile, setProfile] = useState("deddy");

const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            loading : action.value
        }
    }
//   switch (action.type) {
//     case action.type === 'SET_LOADING':
//       return {
//         ...state,
//         loading: action.value,
//       };
//     default:
//       break;
//   }
  return state;
};

const store = createStore(reducer);

export default store;
