import React, {Component} from 'react';
import {AsyncStorage, Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView, Keyboard, ActivityIndicator} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient'
import RBSheet from "react-native-raw-bottom-sheet";
import { connect } from 'react-redux';
import { Button } from 'react-native-elements'
import URL from '../../Config/URL'

class Index extends Component {

  constructor(props){
    super(props)
    this.totalColumn = this.props.navigation.getParam('column')
    this.availableIndexes = []
    this.id = this.props.navigation.getParam('id')
    this.userId = this.props.navigation.getParam('userId')
    this.crosswords = []
    this.state = {
      input: [],
      answers: [],
      userId:"",
      focused: false,
      loading: false
    }
  }

  componentDidMount(){
    this.setState({loading:true})
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    for(let i = this.props.answers.length-1 ; i >= 0; i--){
      if(this.props.answers[i].userId == this.userId){

        if(this.props.answers[i].crosswordsId==this.id){
  
          this.setState({input: this.props.answers[i].userAnswers})
          break;
        }
      }
    }
    // console.log(this.props.answers[this.props.answers.length-1].userAnswers);
    
    // this.totalColumn = await navigation.getParam('column')
    this.renderTiles()
  }

  componentWillUnmount(){
    this.keyboardDidHideListener.remove()
    this.toStore()
  }

  keyboardDidHide = () => {
    Keyboard.dismiss();
    this.setState({
      focused:false
    })
  }

  onFocusChange = () => {
        this.setState({ 
            focused: true
        });
    }
  
  async renderTiles(){
    const token = await AsyncStorage.getItem('token')
    axios.get(`${URL}/crosswords/${this.id}/answers`,{
        headers: {
          Authorization: token
        }
    }).then((res) => {
        this.availableIndexes = res.data.data.availableIndexes
        this.setState({answers:res.data.data.answers})
        // console.log(this.state.answers);

        // is_clue condition

        this.state.answers.map( (answer, index) => {
          if(this.state.answers[index].is_clue){
            let splittedAnswer = this.state.answers[index].answer.split('')
            const answerIndexes = this.state.answers[index].indexes
            for(let l = 0; l < answerIndexes.length; l++){
              let a = this.state.input.slice()
              a[answerIndexes[l]] = splittedAnswer[l]
              this.setState({input:a})
            }
          }
        } )
        for(let i = 0; i < this.totalColumn; i++){
          for(let j = 0; j < this.availableIndexes.length; j++){
            for(let k = 0; k < this.availableIndexes[j].length; k++){
              let number = ''
              if( k != 0 ){
                number = ""
              }else{
                number = this.state.answers[j].number
              }
              this.crosswords[this.availableIndexes[j][k]]= {
                tiles:(
                  <View>
                    <Text style={{position:"absolute", top:-2, left:2, zIndex:1}}>{number}</Text>
                    <TextInput onFocus={this.onFocusChange}
                      autoCapitalize='characters'
                      style={styles.tiles} 
                      value={this.state.input[this.availableIndexes[j][k].toUpperCase()]} 
                      onChangeText={(val)=>{
                        let a = this.state.input.slice()
                        a[this.availableIndexes[j][k]] = val.toUpperCase()
                        this.setState({input:a})
                      }} 
                      textAlign='center' 
                      maxLength={1} 
                    />
                  </View>
                )}
              }
              if(typeof this.crosswords[i]=='undefined'){
                this.crosswords[i]= {tiles:(<View style={{backgroundColor:"black"}} />)}
              }
            }
          }
          this.setState({loading:false})
        }).catch((err) => {
          console.log(err.response.data.message);
          
          alert(err.response.data.message)
        })
        }

        // handle submit

        async handleSubmit(){
          const token = await AsyncStorage.getItem('token')
          this.toStore()

          axios.patch(`${URL}/crosswords/${this.id}/answers`,{
             answers: this.state.input},{
               headers: {
                 Authorization: token
               }
             } )
            .then((res) => {
              // alert(res.data.message)
              if(res.data.data.finished){
                alert("Yeeey kamu Berhasil menyelesaikan crossword kategori ini")
                this.props.navigation.navigate('Home')
              }
            })
            .catch((err) => {
              alert(err.response.message)
            })
        }
        
        toStore(){
          this.props.dispatch({type: "ADD_ANSWERS", payload: {userAnswers: this.state.input, crosswordsId: this.id, userId: this.userId}})
          
        }

        
        
        render(){
          if(this.state.loading){
            return(
              <View style={{flex: 1}}>
                <LinearGradient colors={['#0ba19e', '#1A2980']} style={{flex: 1, justifyContent:'center', flexDirection:"column"}}>

                  <ActivityIndicator size="large" color="#FFF" />
                  <Text style={{textAlign:"center", fontSize:20, color:"#FFF", fontWeight:"bold"}}>Kesel Ya??</Text>
                </LinearGradient>
              </View>
            )
          }else{
          return(
            <View style={{flex:1}}>
            
            
            <LinearGradient colors={['#0ba19e', '#1A2980']} style={{flex: 1}}>
              <FlatList
                removeClippedSubviews={false}
                style={{height: '80%'}}
                data={this.crosswords}
                keyExtractor={(item,index) => {return index.toString()}}
                renderItem={({item})=> (
                  <View style={{flex:1,backgroundColor:"black"}}>
                    {item.tiles}
                  </View>
                ) }
                numColumns={Math.sqrt(this.totalColumn)}
              />
              <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={450}
          duration={250}
          customStyles={{
            container: {
             borderTopLeftRadius: 20,
             borderTopRightRadius: 20,
            }
          }}
        >
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text style={{fontSize: 16, color: 'salmon', fontStyle: 'italic', fontWeight: '500', paddingBottom: 10}}>Soal Mendatar</Text>
              <FlatList
                    removeClippedSubviews={false}
                    style={{paddingBottom: 10}}
                    keyExtractor={(item, index)=> {return index.toString()}}
                    data={this.state.answers}
                    renderItem={({item}) => 
                    item.type=="Across"?(<Text style={{paddingBottom: 7, fontSize: 17}}>{item.number}. {item.question}</Text>):null
                  }
            />

            <Text style={{fontSize: 16, color: 'salmon', fontStyle: 'italic', fontWeight: '500', paddingTop: 10, paddingBottom: 10}}>Soal Menurun</Text>
              <FlatList
                    data={this.state.answers}
                    keyExtractor={(item, index)=> {return index.toString()}}
                    renderItem={({item}) => 
                    item.type=="Down"?(<Text style={{paddingBottom: 7, fontSize: 16}}>{item.number}. {item.question}</Text>):null
                  }
             />
          </View>
        </RBSheet>
        <TouchableOpacity style={{marginTop: -50}} onPress={() => { this.RBSheet.open() }}>
                <View style={{alignItems: 'center', paddingBottom:25}}>
                  <Text style={(this.state.focused) ? {display: 'none'} : {color: '#f0f0f0', fontSize: 25, fontWeight: 'bold'} }>Lihat Soal</Text>
                </View>
              </TouchableOpacity>
              <Button titleStyle={(this.state.focused) ? {display: 'none'} : {color: '#f0f0f0'}} title="Selesai cuy" type="outline" onPress={()=> this.handleSubmit()}/>
           </LinearGradient>
            </View>
    )}
  }
  
}

mapStateToProps = (state) => ({
  answers: state.reducers.answers
})

export default connect(mapStateToProps)(Index)




const styles = StyleSheet.create({
  tiles:{
      borderWidth:0.5,
      backgroundColor: "#FFF",
      textTransform: "uppercase",
      fontWeight: 'bold',
      color: '#000000',
      fontSize: 18
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
  }
});