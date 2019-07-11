import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Avatar } from 'react-native-elements'
import CrossWordCategory from '../../library/components/CrossWordCategory'

class index extends Component {
  render() {
    return (
      <View style={styles.container}>
      <LinearGradient colors={['#0ba19e', '#1A2980']} style={styles.gradientStyle}>
      <StatusBar backgroundColor="#077d7b" barStyle="light-content" />
        <View style={styles.topDashboardContainer}>
          <Text style={styles.topDashboardTitle}>Dashboard User</Text>
        </View>
      	<View style={styles.authorContainer}>
           <View style={styles.authorWrapper}>
              <Image
                style={styles.authorAvatar}
                source={{uri: 'https://images.unsplash.com/photo-1507229943010-31ed01024f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}
              />
              <Text style={styles.authorName}>Novita Yulian Sari</Text>
              <Text style={styles.authorInfo}>Newbie Level 1</Text>
           </View>
        </View>
        <View style={styles.categoryContainer}>
        <Text style={styles.categoryChoose}>Pilihan Kategori</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
             <CrossWordCategory iconTitle="check" iconColor="salmon" iconType="entypo"  colorBorder="salmon" title="TTS Kategori Binatang" />
             <CrossWordCategory iconTitle="check" iconColor="salmon" iconType="entypo" colorBorder="salmon" title="TTS Kategori Tumbuhan" />
             <CrossWordCategory iconTitle="cross" iconColor="#f0f0f0" iconType="entypo" colorBorder="#f0f0f0" title="TTS Kategori Astronomi" />
             <CrossWordCategory iconTitle="cross" iconColor="#f0f0f0" iconType="entypo" colorBorder="#f0f0f0" title="TTS Kategori Bebas" />
          </ScrollView>
        </View>
        </LinearGradient>
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
    fontWeight: '500',
    color: '#f0f0f0'
  },
  authorInfo: {
    fontSize: 16, 
    paddingTop: 5,
    color: '#f0f0f0'
  },
  categoryContainer: {
    flex: 5
  },
  gradientStyle: {
    flex: 1
  },
  topDashboardContainer: {
    flex: 0.5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 5
  },
  topDashboardTitle: {
    fontSize: 21, 
    fontWeight: '500', 
    color: '#f0f0f0'
  },
  authorAvatar: {
    width: 60, 
    height: 60, 
    borderRadius: 100
  },
  categoryChoose: {
    fontSize: 16, 
    color: '#f0f0f0', 
    paddingLeft: 30, 
    paddingBottom: 10, 
    fontWeight: '500', 
    marginTop: -10
  }
});

export default index;