const DarkReducer=(state,action)=>{
switch(action.type){


    case "DARK_MOD":
        return{
           moad:true
        }

        

    case "LIGHT_MOD":
        return{
            moad:false
        }

        default:
            return{...state}

}
}


export {DarkReducer};