import { ADD_CROSSWORD, ADD_ANSWERS, GET_CROSSWORD } from './types'
import axios from 'axios'
import URL from '../../Config/URL'
import AsyncStorage from 'react-native'


//=========================UNTUK GET LIST CROSSWORD=======================

export const addCrossword = (payload) => ({
  type : ADD_CROSSWORD,
  payload : payload
})

 
export function fetchData(token) {
  return (dispatch) => {
        console.log(token);
        // token = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2MjkxODE4NH0.6Y4cl_eFM6yljyWfZNjGWD0WT5TvgdjvvK61lwF4-iM'
        
        axios.get(`${URL}/crosswords`,{
          headers: {
            Authorization: token
          }
        }).then((res) => {
          console.log(res.data.userData);
          dispatch({type:"ADD_USER", payload:res.data.userData})
          dispatch(addCrossword(res.data.data))
        })
        .catch((err) => alert(err.response.data.message))
      
    
    
  }
}

export function fetchAnswer(token) {
  return(dispatch) => {

    dispatch({
      type: 'FETCH_ANSWERS',
      payload : axios.get(`${URL}/answers`,{
        headers: {
          Authorization: token
        }
      })
    })
  }
}

//=========================UNTUK GET KOTAK KOTAK=======================

// export const getQuestion = (id) => ({
//   type : GET_QUESTIONS,
//   payload : anjing
// })

export function getCrossword(id,token) {
  return (dispatch) => {
    // axios.get(`${URL}/crosswords/${id}/answers`,{
    //   headers: {
    //     Authorization: token
    //   }
    // }).then((res) => {
    //   dispatch(getQuestion(res.data.data))
    // })
    //   .catch((err) => console.log('err', err.response))
    dispatch({
      type : 'FETCH_QUESTIONS',
      payload : axios.get(`${URL}/crosswords/${id}/answers`,{
                  headers: {
                    Authorization: token
                  }
                })
    })
  }
}

export function storeAnswer(answers){
  dispatch({type: ADD_ANSWERS, payload: answers})
}

