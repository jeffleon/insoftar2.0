const userReducer = (state= {}, action) => {
    switch(action.type) {
        // save a current user
        case 'DATA_UPDATE':
            console.log(action.payload);
            return {...action.payload};
        // reset the data of current user
        case 'RESET_DATA':
            return {nombre:"", apellido:"", cedula:"", telefono:"", email:""};
        default:
            return state;
    }
}

export default userReducer;