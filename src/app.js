import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/header';

const App = () => {
    return(
        <Provider store={createStore(reducers)}>
            <View>
                <Header text="Home"/>
            </View>
        </Provider>
    );
}

export default App;
