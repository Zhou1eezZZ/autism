import request from '@/utils/request'

export function userSignUp(data){//注册
    return request({
        url:`/userAPI/user/addUser`,
        method:'post',
        data
    })
}

export function userDelete(id){
    return request({
        url:`/userAPI/user/delete?uuid=${id}`,
        method:'delete',
        
    })
}

export function getUserInfo(data){
    return request({
        url:`/userAPI/user/getUserList`,
        method:'get',
        parama:data //get请求用parama
    })
}

export function userLogin(data){//登录
    return request({
        url:`/userAPI/user/login`,
        method:'post',
        data
    })
}

export function userUpdate(data){
    return request({
        url:`/userAPI/user/update`,
        method:'put',
        data
    })
}

const UserAPI = {
    userSignUp,
    userDelete,
    getUserInfo,
    userLogin,
    userUpdate
}

export default UserAPI