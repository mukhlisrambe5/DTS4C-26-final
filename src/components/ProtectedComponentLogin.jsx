import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../authentication/firebase'   
import { useAuthState } from 'react-firebase-hooks/auth'


const ProtectedComponentLogin = ({children}) => {
  
    const navigate= useNavigate(auth);
    const [user, isLoading] = useAuthState(auth)

    useEffect(()=>{
        if(user){
            return children
        }
    },[user, navigate])
    if(isLoading){
        return
    }else{
        navigate("/login")
        return ;
    }
  
}

export default ProtectedComponentLogin