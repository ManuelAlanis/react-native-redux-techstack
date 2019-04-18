import React from 'react';
import { View, Text, StatusBar } from 'react-native';

let progress = 0.5;

class Header extends React.Component {
    constructor(props){
        super(props);
        this.increaseProgress(0.1);
        // console.log('tech_stack constructor');
    }

    componentWillMount() {
        this.increaseProgress(0.1);;
        // console.log('tech_stack componentWillMount');
    }

    increaseProgress(increaseValue) {
        // setTimeout(function(){
            progress += increaseValue;
        // }, 1000)
    }

    render() {
        // console.log('tech_stack render');
        this.increaseProgress(0.2)
        return (
            <View>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text style={{ marginLeft: 5, marginBottom: 10, marginTop: 10, fontSize: 20, justifyContent: 'center', textAlign: 'center' }}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

export default Header;