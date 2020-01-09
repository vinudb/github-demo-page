const filtersReducerDefaultState = {
    text: '',
    language:'',
    type: ''
  };

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
    case 'SET_LANGUAGE':
        return {
            ...state,
            language: action.language
        };

    case 'SET_TYPE':
        return {
            ...state,
            type: action.type
        };
      default:
        return state;
    }
  };
  