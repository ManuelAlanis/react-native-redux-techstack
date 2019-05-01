import React, {Component, PropTypes} from 'react'
import {
    View,
    TextInput,
    TouchableHighlight,
    Text
} from 'react-native'
class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.initBinds();
    }

    initBinds() {
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleUserNameChange = this.handleUserNameChange.bind(this);
        // this.handleLoginPress = this.handleLoginPress.bind(this);
    }

    handlePasswordChange(text) {
        this.setState({password: text})
    }

    handleUsernameChange(text) {
        this.setState({username: text})
    }

    handleLoginPress() {
        this.props.handleLogin(this.state.username, this.state.password)
    }

    render() {
        return (
            <View>
                <TextInput
                    testID={'username'}
                    value={this.state.username}
                    onChangeText={() => this.handleUsernameChange}
                />
                <TextInput
                    testID={'password'}
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={() => this.handlePasswordChange}
                />
                <TouchableHighlight
                    testID={'loginButton'}
                    onPress={() => this.handleLoginPress}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
        )

    }
}

export default Login