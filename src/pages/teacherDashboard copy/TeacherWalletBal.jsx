import axios from "../../api/axios";


//FUNCTION TO GET WALLET BALANCE
export const getTeacherWalletBalance = async () => {
    try {
    const response = await axios.get("api/wallet")
    console.log(response.data);
    return response.data;
    } catch (error) {
    console.log(error);
    };  
};