const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    var newState={};
     switch (action.type){
       case 'LOGIN':
        newState={authenticated: true};  
        break;
      case 'LOGOUT':
        newState={authenticated: false};
        break;
      default:
        newState=state;
        break;
     } 
     return newState;
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };