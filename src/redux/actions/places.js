import { ADD_PLACE, ADD_ANSWERS } from './types'
import axios from 'axios'
import URL from '../../Config/URL'

export function fetchData(id) {
  return (dispatch) => {
    axios.get(`${URL}/${id}/answers`).then((res) => {
      dispatch({type: ADD_PLACE, payload: res.data.data})
    })
      .catch((err) => console.log('err', err))
  }
}

export function storeAnswer(answers){
  dispatch({type: ADD_ANSWERS, payload: answers})
}

