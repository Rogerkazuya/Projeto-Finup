import React from "react"
import { useRouter } from "next/router"




export default function ConteudoPrincipal( ) {
    
    const router = useRouter()
    
    React.useEffect(() => {
      router.push("/home")
    },[])
  
  }