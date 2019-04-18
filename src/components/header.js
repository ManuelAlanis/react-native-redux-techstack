import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

let progress = 0.5;

class Header extends React.Component {
    constructor(props){
        super(props);
        this.increaseProgress(0.1);
    }

    componentWillMount() {
        this.increaseProgress(0.1);;
    }

    increaseProgress(increaseValue) {
        // setTimeout(function(){
            progress += increaseValue;
        // }, 1000)
    }

    render() {
        this.increaseProgress(0.2)
        return (
            <View>
                <StatusBar backgroundColor="#2626ed" barStyle="light-content" />
                <Text style={styles.header}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#2626ed',
        color: '#fff'
    }
})

export default Header;