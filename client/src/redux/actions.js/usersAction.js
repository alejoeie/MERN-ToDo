import ACTIONS from './index'
import axios from 'axios'

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}

export const fetchAllUsers = async (token) => {
    const res = await axios.get(`${process.env.BASE_URL}/users/get_all_users`, {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: res.data
    }
}