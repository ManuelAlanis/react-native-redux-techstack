import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state ={ 
            progress: 0
        }
    }

    initBinds() {
        this.addTwoNumbers = this.addTwoNumbers.bind(this);
    }

    componentWillMount() {  

    }

    increaseProgress(value){
        this.setState({
            progress: value
        });
    }

    addTwoNumbers(a, b) {
        return a + b;
    }    

    render() {
        return (
            <View>
                <StatusBar backgroundColor="#2626ed" barStyle="light-content" />
                <Text style={styles.header}>
                    {this.props.text}
                </Text>
                {/* <TouchableOpacity onPress={this.handleButtonClick}>
                    <Text>Press here to kill you...</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}

Header.propTypes = {
    text: propTypes.string.isRequired
}

// Header.defaultProps = {
//     text: 'Unit test title'
// };

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