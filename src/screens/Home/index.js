import React, { Component } from 'react'
import axios from 'axios'
import URL from '../../Config/URL'
import { connect } from 'react-redux'
import { addPlace } from '../../redux/actions/places'
import { StyleSheet, View, Text, AsyncStorage, Image, ScrollView, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import CrossWordCategory from '../../library/components/CrossWordCategory'

class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      user: ''
    }
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    const token = await AsyncStorage.getItem('token')
    console.log(token);

    axios.get(`${URL}/crosswords`, {
      headers: {
        Authorization: token
      }
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          data: res.data.data,
          user: res.data.userData.username
        })
      }
    }).catch((err) => alert(err.response.data.message))
  }

  playGround(id, column, userId) {
    this.props.navigation.navigate('PlayGround', {
      id: id,
      column: column,
      userId
    })
  }

  handleLogout = () => {
    AsyncStorage.removeItem('token')
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    const list = this.state.data
    return (

      <View style={styles.container}>
        <LinearGradient colors={['#0ba19e', '#1A2980']} style={styles.gradientStyle}>
          <StatusBar backgroundColor="#077d7b" barStyle="light-content" />
          <View style={styles.topDashboardContainer}>
            <Text style={styles.topDashboardTitle}>Dashboard User</Text>
            <View style={{ position: 'absolute', right: 20, top: 10 }}>
              <TouchableOpacity activeOpacity={.7}>
                <Icon name='sign-out' type='font-awesome'
                  color='#f0f0f0' onPress={this.handleLogout} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.authorContainer}>
            <View style={styles.authorWrapper}>
              <Image
                style={styles.authorAvatar}
                source={{ uri: 'https://images.unsplash.com/photo-1507229943010-31ed01024f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' }}
              />
              <Text style={styles.authorName}>{this.state.user}</Text>
              <Text style={styles.authorInfo}>Newbie Level 1</Text>
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryChoose}>Pilihan Kategori</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {
                list.map((category, i) => (
                  <TouchableOpacity key={i} onPress={() => this.playGround(category.id, category.total_column, category.user_crossword[0].user_id)}>
                    <CrossWordCategory iconTitle="check" iconColor={category.user_crossword[0].is_finished ? 'salmon' : '#f0f0f0'} iconType="entypo" colorBorder={category.user_crossword[0].is_finished ? 'salmon' : '#f0f0f0'} title={category.name} />
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection: 'row',
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


const mapStateToProps = (state) => ({
  finishCond: state.reducers.finishCond
})

export default connect(mapStateToProps)(index)