import axios from "axios";


const userSignIn = async (userEmail, userPassword) => {
    try{

        const payload = {
            userEmail,
            userPassword,   
        }

        const BASE_URL = import.meta.env.VITE_SERVER_URL
        const FULL_URL = `${BASE_URL}/user/signin`

        const response = await axios.post(FULL_URL, payload, {withCredentials : true} )

        return response.data

    }catch(error){
        console.log(error)
    }
}

export default userSignIn