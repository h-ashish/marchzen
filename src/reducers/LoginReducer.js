let initialState = {login:false}

export default function LoginReducer (state=initialState, action){
    switch (action.type){
        case 'add' :
            return {...state, login: action.login}
        default:
            return state;
    }
}