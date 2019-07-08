import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  static navigationOptions = {
    title: 'Register Page',
  }

  handleLogin() {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Fragment>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: '10%' }}>
            <View style={{ alignItems: 'center' }}>
              <Icon
                reverse
                name='codepen'
                type='font-awesome'
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Input
                onChangeText={(username)=>this.setState({ username })}
                value={this.state.value}
                placeholder='Username'
                leftIcon={
                  <Icon
                    name='user'
                    type='font-awesome'
                  />
                }
              />
            </View>
            <View>
              <Input
                onChangeText={(email)=>this.setState({ email })}
                value={this.state.email}
                placeholder='Email Address'
                leftIcon={
                  <Icon
                    name='user'
                    type='font-awesome'
                  />
                }
              />
            </View>
            <View>
              <Input
                onChangeText={(password)=>this.setState({ password })}
                value={this.state.password}
                placeholder='Password'
                leftIcon={
                  <Icon
                    name='lock'
                    type='font-awesome'
                  />
                }
              />
            </View>
            <View>
              <Input
                onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })}
                value={this.state.passwordConfirm}
                placeholder='Konfirmasi Password'
                leftIcon={
                  <Icon
                    name='lock'
                    type='font-awesome'
                  />
                }
              />
            </View>
          </View>
          <Button
            title="Register Bro"
            containerStyle={{ margin: 40, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
          />
          <TouchableOpacity onPress={() => this.handleLogin()} style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>Sudah punya akun? silahkan Login</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({

});
export default index