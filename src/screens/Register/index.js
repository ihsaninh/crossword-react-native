import React, { Component, Fragment } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'

class index extends Component {
  static navigationOptions = {
    title: 'Register Page',
  }

  render() {
    return (
      <Fragment>
        <View style={{flex: 1}}>
            <View style={{marginTop: '10%'}}>
            <View style={{alignItems: 'center'}}>
              <Icon
                  reverse
                  name='codepen'
                  type='font-awesome'
                />
            </View>
            <View style={{marginTop: 20}}>
                <Input
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
                title="REgister Bro"
                containerStyle={{margin: 40, alignItems: 'center', justifyContent: 'center', marginTop: 20}}
              />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{alignItems: 'center', marginTop: 20}}>
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