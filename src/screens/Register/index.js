import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TextInput,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
// import axios from "axios";

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputUsername: '',
            inputEmail: '',
            inputPassword: ''
        }
    }

    // handleLogin = () => {
    //     axios
    //         .post("http://192.168.0.26:3000/auth/login/", {
    //             email: this.state.inputEmail,
    //             password: this.state.inputPassword
    //         })
    //         .then(res => {
    //             const token = res.data.token;
    //             AsyncStorage.setItem("token", token);
    //             this.props.navigation.navigate(token ? "RoomChat" : "Login");
    //         })
    //         .catch(error => {
    //             alert("kesalahan saat login silahkan coba lagi");
    //         });
    // };

    // async componentDidMount() {
    //     const token = await AsyncStorage.getItem("token");
    //     if (token !== null) {
    //         this.props.navigation.navigate("RoomChat");
    //     }
    // }

    handleRegister = () => {
        email = this.state.inputUsername
        email = this.state.inputEmail
        password = this.state.inputPassword

        alert(`Your email is ${email} and your password is ${password}`)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                 <LinearGradient colors={['#0ba19e', '#1A2980']} style={{flex: 1}}>
                    <StatusBar
                        backgroundColor="#077d7b"
                        barStyle="light-content"
                    />
                        <View style={{height: '30%', justifyContent: 'center'}}>
                            <View style={{marginTop: '15%'}}>
                                <Icon
                                   name="delicious"
                                    type="font-awesome"
                                    color="#f0f0f0"
                                    size={60}
                                />
                                <Text
                                    style={{
                                        fontSize: 30,
                                        textAlign: 'center',
                                        marginBottom: 40,
                                        color: '#f0f0f0',
                                        fontWeight: '500',
                                        marginTop: 10
                                    }}>
                                    CrossWords
                                </Text>
                            </View>
                        </View>
                        <View style={{height: '60%',justifyContent: 'center'}}>
                        <TextInput
                                selectionColor={'#f0f0f0'}
                                style={{
                                    height: 40,
                                    borderColor: '#f0f0f0',
                                    borderWidth: 2,
                                    color: '#f0f0f0',
                                    borderRadius: 50,
                                    paddingLeft: 20,
                                    fontWeight: '500',
                                    marginHorizontal: 30
                                }}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Username"
                                onChangeText={inputEmail =>
                                    this.setState({ inputUsername })
                                }
                            />
                            <TextInput
                                selectionColor={'#f0f0f0'}
                                style={{
                                    height: 40,
                                    borderColor: '#f0f0f0',
                                    borderWidth: 2,
                                    color: '#f0f0f0',
                                    borderRadius: 50,
                                    paddingLeft: 20,
                                    marginTop: 20,
                                    fontWeight: '500',
                                    marginHorizontal: 30
                                }}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Email Address"
                                onChangeText={inputEmail =>
                                    this.setState({ inputEmail })
                                }
                            />
                            <TextInput
                                selectionColor={'#f0f0f0'}
                                style={{
                                    height: 40,
                                    color: '#f0f0f0',
                                    borderColor: '#f0f0f0',
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    paddingLeft: 20,
                                    fontWeight: '500',
                                    margin: 20,
                                    marginHorizontal: 30
                                }}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Password"
                                onChangeText={inputPassword =>
                                    this.setState({ inputPassword })
                                }
                                secureTextEntry={true}
                            />
                            <Button
                                buttonStyle={{
                                    margin: 30,
                                    marginTop: 10,
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: 50
                                }}
                                titleStyle={{
                                    color: '#2193b0',
                                    fontWeight: '500',
                                    fontSize: 16
                                }}
                                title="REGISTER"
                                onPress={this.handleRegister}
                            />
                        </View>
                        <View style={{height: '10%'}}>
                             <View
                                style={{ alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ color: '#fff' }}>
                                    Sudah punya akun?{' '}
                                    <Text
                                        style={{ color: '#ddd' }}
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                'Login'
                                            )
                                        }>
                                        Silahkan Login
                                    </Text>
                                </Text>
                            </View>
                        </View>
                 </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default Index