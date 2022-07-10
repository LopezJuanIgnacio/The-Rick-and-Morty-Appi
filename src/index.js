import React from 'react';
import Main from './navigation/Main';
import { Provider } from 'react-redux'
import {store} from './store'
import { init } from "./db";

init()
  .then(() => {
    console.log("DB initialized");
  })
  .catch((err) => {
    console.log(err);
  });


export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}