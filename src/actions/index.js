export const login = (data)=>{
    return{
        type : "LOGIN",
        payload:{
            id:new Date.getTime().toString(),
            data: data
        }
    }
}

export const logout = ()=>{
    return{
        type : "LOGOUT"
    }
}