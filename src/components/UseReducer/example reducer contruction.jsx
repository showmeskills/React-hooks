//Reducer
const countReducer = (state,action)=>{
    switch(action.type){
        case 'add':
            return state + 1;
        case 'sub':
            return state - 1;
        default:
            return state;
    }
}



