import { ADD_CROSSWORD, GET_CROSSWORD, ADD_ANSWERS } from '../actions/types'

const initialState = {
  places: {
    places: []
  },
  answers: [],
  finishCond: [],
  crosswords: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CROSSWORD:
      state = {
        ...state,
        crosswords: state.crosswords.concat(action.payload)
      }
      return state

    case GET_CROSSWORD:
      state = {

      }
      return state

    case "ADD_ANSWERS":

      state = { answers: [...state.answers, { crosswordsId: action.payload.crosswordsId, userAnswers: action.payload.userAnswers, userId: action.payload.userId }] }

      return state

    case "STORE_FINISH_COND":

      state = { finishCond: [...state.finishCond, { crosswordsId: action.payload.crosswordsId, isFinish: action.payload.isFinish, userId: action.payload.userId }] }

      return state

    default:
      return state
  }
}

export default reducer

// const { navigation } = this.props
    // this.column = navigation.getParam('column')
    // const id = navigation.getParam('id')
    // this.props.fetchData(id)