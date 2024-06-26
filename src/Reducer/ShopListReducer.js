export default (currentState, action) => {
    switch(action.type) {
        case "SHOW__SHOPLIST":
        return {isOpen: true}
        case "CLOSE__SHOPLIST": 
        return {isOpen: false}
        default:
            return currentState;
    }
} 