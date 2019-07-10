import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Avatar, } from 'react-native-elements'

class index extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
      	<View style={{flex: 3}}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00B4DB', '#0083B0']}style={{flex: 1, elevation: 0.5}}>
           <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
             <Avatar
                rounded
                size="large"
                icon={{ name: 'user', type: 'font-awesome' }}
              />
              <Text style={{color: '#fff', fontSize: 24, paddingTop: 10, fontWeight: '500'}}>Novita Yulian Sari</Text>
           </View>
         </LinearGradient>
        </View>
        <View style={{flex: 5}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default index;