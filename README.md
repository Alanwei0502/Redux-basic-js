We cannot directly modify or mutate the storebecause redux is built on top of functional programming principle.

In functional programming, we don't mutate state, so we cannot write code like this as our store is a immutable object
```
store.currentUser = {name: 'Alan'};
```

So to update this, we should create a function that take this store as an argument and return an updated store.
```
function reducer(store){
  return const updated = {...store};
}
```

To return an immutable object, we can use spread operator or other libraries like immer, immutable...
This updated function is called "reducer".


Here is the question, how reducer knows what properties in this store should be updated, so we need another argument called an "action"
```
function reducer(store, action){
  return const updated = {...store};
}
```

So these are the three building blocks in redux application
1. Dispatch an Action (Event) 
2. Store
3. Reducer (Event Handler)


Dispatch is like an entrnace point to our store, so dispatching action is essential sending every action to the same entrance point.
So we have a central place where we can control what should happen every the user perform the action.
This allows us to log every action. This is how redux devtool works.


4 steps to build a Redux Application
1. Design the store
```
{
  bugs:[
    {
      id:1,
      description: '',
      resovled: false,
    }
  ],
  currentUser: {}
}
```

2. Define the actions
 ```
 {
   type: 'ADD_BUG',
   payload: {
     description: '...',
   }
 }

 {
   type: 'REMOVE_BUG',
   payload: {
     id: 1,
   }
 }
 ```
3. Create a reducer
4. Set up the store

![Redux Data Flow Diagram](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)