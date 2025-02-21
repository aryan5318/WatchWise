export const  Handlevalidation=(email,password)=>{
      const isEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
      const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
      if(!isEmail) return ("❌ Please enter a valid email address")
      if(!isPassword) return ("❌ Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character")
       return null
}
export const  Handlevalidation1=(email)=>{
      const isEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
     
      if(!isEmail) return ("❌ Please enter a valid email address")
    
       return null
}
export const  Handlevalidation2=(password)=>{
      
      const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
     
      if(!isPassword) return ("❌ Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character")
       return null
}