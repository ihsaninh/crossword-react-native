import { ADD_CROSSWORD, ADD_ANSWERS, GET_CROSSWORD } from './types'
import axios from 'axios'
import URL from '../../Config/URL'

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2Mjg1MzQ0Mn0.xDxwlzDvkxJbfvpVG5HOKdo_uXCc8zpBykT1ysfcZsA'

//=========================UNTUK GET LIST CROSSWORD=======================

export const addCrossword = (bangsat) => ({
  type : ADD_CROSSWORD,
  payload : bangsat
})

export function fetchData() {
  return (dispatch) => {
    axios.get(`${URL}/crosswords`,{
      headers: {
        Authorization: token
      }
    }).then((res) => {
      dispatch(addCrossword(res.data.data))
    })
      .catch((err) => console.log('err', err))
  }
}

//=========================UNTUK GET KOTAK KOTAK=======================

export const getQuestion = (anjing) => ({
  type : GET_CROSSWORD,
  payload : anjing
})

export function getCrossword(id) {
  return (dispatch) => {
    axios.get(`${URL}/crosswords/${id}/answers`,{
      headers: {
        Authorization: token
      }
    }).then((res) => { console.log(res.data.data)
      dispatch(getQuestion(res.data.data))
    })
      .catch((err) => console.log('err', err))
  }
}

export function storeAnswer(answers){
  dispatch({type: ADD_ANSWERS, payload: answers})
}

