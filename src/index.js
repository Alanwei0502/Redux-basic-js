import store from './store';
import { bugAdded, bugResolved } from './actions'

// state = reducer(state, action);
// notify the subscribers

// This subscription method return an unsubscribe method. 
// It's important because user navigate the way from the current page and in the new page we aren't going to have that UI component
// So we don't want to subsciption to that store.
// Because this subscription can cause memory leaks.
const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(bugAdded('Bug1'));


// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1
//   }
// });

store.dispatch(bugResolved(1));

unsubscribe();

console.log(store.getState());