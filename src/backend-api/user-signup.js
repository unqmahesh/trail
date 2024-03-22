import axios from "axios";


const userSignUp = async (userName, userEmail, userPassword) => {
    try{

        const payload = {
            userName,
            userEmail,
            userPassword,
            userRole : "user"
        }

        const BASE_URL = import.meta.env.VITE_SERVER_URL
        const FULL_URL = `${BASE_URL}/user/signup`
  
        const response = await axios.post(FULL_URL, payload, {withCredentials : true} )

        return response.data

    }catch(error){
        console.log(error)
    }
}

export default userSignUp