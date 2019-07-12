import { ADD_CROSSWORD, GET_CROSSWORD, ADD_ANSWERS } from '../actions/types'

const initialState = {
  places : {
    places: []
  },
  answers: [],
  finishCond: [],
  crosswords: [],
  user: {},
  questions: [],
  fetching:false,
  fetched:false,
  error:null,

};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CROSSWORD:
    state = {
      ...state,
          crosswords: state.crosswords.concat(action.payload)
    }
    return state
    break

    case 'FETCH_QUESTIONS_PENDING':
      state = {
        ...state, fetching:true
      }
      return state
      break

    case 'FETCH_QUESTIONS_FULFILLED':
      state = {
        ...state, fetching:false, fetched:true, questions: action.payload.data.data
      }
      return state
      break

    case 'FETCH_QUESTIONS_REJECTED':
      state = {
        ...state, fetching:false, error: action.payload
      }
      return state
      break
   
      case 'FETCH_ANSWERS_PENDING':
      state = {
        ...state, fetching:true
      }
      return state
      break

    case 'FETCH_ANSWERS_FULFILLED':
      state = {
        ...state, fetching:false, fetched:true, answers: action.payload.data.data
      }
      return state
      break

    case 'FETCH_ANSWERS_REJECTED':
      state = {
        ...state, fetching:false, error: action.payload
      }
      return state
      break

    // case GET_QUESTIONS: 
    // state = {
    //   ...state,
    //     questions: {answers:action.payload.answers, availableIndexes: action.payload.availableIndexes}
    // }
    // return state
    
    case "ADD_USER":
      
      state = {
        ...state,
          user: {id:action.payload.id,username:action.payload.username}
      }
      return state

    case "ADD_ANSWERS":
        console.log("Leng "+state.answers.length);
        // if(state.answers.length!=0){
          
        //   for(let i=0; i<state.answers.length; i++){
        //     if(state.answers[i].crosswordsId == action.payload.crosswordsId){
        //       state = {
        //         ...state,
        //         answers: [...state.answers.slice(0,i), ...state.answers.slice(i+1)] }
                
        //       console.log("deleted");
        //       break
              
        //     }else{
        //       state = {
        //         ...state,
        //         answers: [...state.answers, { crosswordsId : action.payload.crosswordsId, userAnswers : action.payload.userAnswers, userId: action.payload.userId }] }
                
        //       }
        //       console.log("added");
        //       break
        //     }
        //   }else{
            
            state = {
              ...state,
              answers: [...state.answers, { crosswordsId : action.payload.crosswordsId, userAnswers : action.payload.userAnswers, userId: action.payload.userId }] }
        // }
        
    return state

    // case "STORE_FINISH_COND":
      
    //     state = {finishCond: [...state.finishCond, { crosswordsId : action.payload.crosswordsId, isFinish : action.payload.isFinish, userId: action.payload.userId }] }
      
    //   return state
    
    default:
      return state
  }
}

export default reducer

// const { navigation } = this.props
    // this.column = navigation.getParam('column')
    // const id = navigation.getParam('id')
    // this.props.fetchData(id)