import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TextInput,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import axios from "axios";

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputEmail: '',
            inputPassword: '',
            focused: false
        }
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    onFocusChange = () => {
        this.setState({ 
            focused: true
        });
    }

    keyboardDidHide = () => {
        Keyboard.dismiss();
        this.setState({
          focused: false
        })
    }

    render() {
        return (
            <View style={styles.container}>
                 <LinearGradient colors={['#0ba19e', '#1A2980']} style={styles.gradientContainer}>
                    <StatusBar
                        backgroundColor="#077d7b"
                        barStyle="light-content"
                    />
                        <View style={styles.topBodyContainer}>
                            <View style={(this.state.focused) ? styles.topBodyHidden :  styles.topBody}>
                                <Icon
                                   name="delicious"
                                    type="font-awesome"
                                    color="#f0f0f0"
                                    size={60}
                                />
                                <Text
                                    style={styles.appsTitle}>
                                    CrossWords
                                </Text>
                            </View>
                        </View>
                        <View style={styles.formBodyContainer}>
                            <TextInput
                                onFocus={this.onFocusChange}
                                selectionColor={'#f0f0f0'}
                                style={styles.formStyle}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Email Address"
                                onChangeText={inputEmail =>
                                    this.setState({ inputEmail })
                                }
                            />
                            <TextInput
                                onFocus={this.onFocusChange}
                                selectionColor={'#f0f0f0'}
                                style={styles.formStyle}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Password"
                                onChangeText={inputPassword =>
                                    this.setState({ inputPassword })
                                }
                                secureTextEntry={true}
                            />
                            <Button
                                buttonStyle={styles.buttonStyle}
                                titleStyle={styles.titleButtonStyle}
                                title="LOGIN"
                                onPress={() => this.props.navigation.navigate('Home')} 
                            />
                        </View>
                        <View style={styles.bottomBodyContainer}>
                             <View
                                style={(this.state.focused) ? styles.textBottomHidden :  styles.textBottom}>
                                <Text style={styles.textColorBottom}>
                                    Belum punya akun?{' '}
                                    <Text
                                        style={styles.textColorLink}
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                'Register'
                                            )
                                        }>
                                        Silahkan Register
                                    </Text>
                                </Text>
                            </View>
                        </View>
                 </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gradientContainer: {
        flex: 1
    },
    topBodyContainer: {
        height: '30%', justifyContent: 'center'
    },
    topBody: { 
       marginTop: '15%', 
    },
    topBodyHidden: {
        marginTop: '15%', 
        display: 'none'
    },
    appsTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40,
        color: '#f0f0f0',
        fontWeight: '500',
        marginTop: 10
    },
    formBodyContainer: {
        height: '60%',
        justifyContent: 'center'
    },
    formStyle: {
        height: 40,
        borderColor: '#f0f0f0',
        borderWidth: 2,
        color: '#f0f0f0',
        borderRadius: 50,
        paddingLeft: 20,
        fontWeight: '500',
        marginBottom: 20,
        marginHorizontal: 30
    },
    buttonStyle: {
        margin: 30,
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 50
    },
    titleButtonStyle: {
        color: '#2193b0',
        fontWeight: '500',
        fontSize: 16
    },
    bottomBodyContainer: {
        height: '10%'
    },
    textBottomHidden: {
        alignItems: 'center', 
        marginTop: 20, 
        display: 'none'
    },
    textBottom: {
        alignItems: 'center', 
        marginTop: 20, 
    },
    textColorBottom: {  
        color: '#fff'
    },
    textColorLink: {
        color: '#ddd'
    }
})

export default Index
