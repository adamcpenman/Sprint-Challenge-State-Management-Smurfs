1. What problem does the context API help solve?
Props drilling. Sending props from component to component
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Reducers allow is to write pure functions to manage state changes with predictability. Actions inform the reducer what action happened in the app. The store contains our state for the applications.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state of app at a given time, information can be passed to other components easily. While component state is state contained in a component, that can be passed down as props.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? It allows us to make asynchronous operations in redux. Thunk is a term for a function that returns another function. We use thunk to return async operations
1. What is your favorite state management system you've learned and this sprint? Please explain why!
It is hard to say. But I would state redux. Since it is used with the reducers and actions to keep track of my event and state. It also helps keeping my code organized
