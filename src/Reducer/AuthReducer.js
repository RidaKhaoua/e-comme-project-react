export default (currentState, action) => {
    switch(action.type) {
        case "REGISTER":
            return {
                ...currentState,
                user:{
                    userName:action.payload.userName,
                    email: action.payload.email,
                    password:action.payload.password,
                    isAuth: true,
                }
            } 

            case "LOGIN":
                return {
                    ...currentState,
                    user:{
                        ...currentState.user,
                        isAuth: true
                    }
                }    
                
        case "LOGOUT":
            return {
                ...currentState,
                user:{
                    ...currentState.user,
                    isAuth: false
                }
            }

        default:
            console.log(`Type ${action.type} is not defined`)
            return {...currentState}
    }
}