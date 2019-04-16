import React from 'react';
import { View, Text, StatusBar } from 'react-native';

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text style={{ marginLeft: 5, marginTop: 5, fontSize: 20 }}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

export default Header;