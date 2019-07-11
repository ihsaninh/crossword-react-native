import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Avatar } from 'react-native-elements'
import CrossWordCategory from '../../library/components/CrossWordCategory'

class index extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
          <Text style={{fontSize: 21, fontWeight: '500'}}>Dashboard User</Text>
        </View>
      	<View style={styles.authorContainer}>
         {/*<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00B4DB', '#0083B0']}style={{flex: 1, elevation: 0.5}}>*/}
           <View style={styles.authorWrapper}>
             <Avatar
                rounded
                size="medium"
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1507229943010-31ed01024f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                }}
              />
              <Text style={styles.authorName}>Novita Yulian Sari</Text>
              <Text style={styles.authorInfo}>Newbie Level 1</Text>
           </View>
         {/*</LinearGradient>*/}
        </View>
        <View style={styles.categoryContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
             <CrossWordCategory iconTitle="check" iconColor="salmon" iconType="entypo"  colorBorder="salmon" title="TTS Kategori Binatang" />
             <CrossWordCategory iconTitle="check" iconColor="salmon" iconType="entypo" colorBorder="salmon" title="TTS Kategori Tumbuhan" />
             <CrossWordCategory iconTitle="cross" iconColor="grey" iconType="entypo" colorBorder="grey" title="TTS Kategori Astronomi" />
             <CrossWordCategory iconTitle="cross" iconColor="grey" iconType="entypo" colorBorder="grey" title="TTS Kategori Bebas" />
             <CrossWordCategory iconTitle="cross" iconColor="grey" iconType="entypo" colorBorder="grey" title="TTS Kategori Bebas 2" />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  authorContainer: {
    flex: 3
  },
  authorWrapper: {
    margin: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd', 
    paddingBottom: 20
  },
  authorName: {
    fontSize: 22, 
    paddingTop: 10, 
    fontWeight: '500'
  },
  authorInfo: {
    fontSize: 16, 
    paddingTop: 5
  },
  categoryContainer: {
    flex: 5
  }
});

export default index;