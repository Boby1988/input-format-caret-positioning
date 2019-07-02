import React from 'react';
import { Provider } from 'react-redux'
import store from './services/store'
import ReduxForm from './form'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h4>Test form comes here</h4>

 
        <ReduxForm />
      </div>
    </Provider>
  );
}

export default App;
