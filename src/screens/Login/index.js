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
      email:'',
      password:''
    }
  }

  static navigationOptions = {
    title: 'Login Page',
  }

  handleRegister() {
    this.props.navigation.navigate('Register')
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
                onChangeText={(email)=>this.setState({email})}
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
                onChangeText={(password)=>this.setState({password})}
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
          </View>
          <Button
            title="Login Bro"
            containerStyle={{ margin: 40, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
          />
          <TouchableOpacity onPress={() => this.handleRegister()} style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>Belum punya akun? silahkan Register</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({

});

export default index