import {request} from './request'

export function getDate(){
    return request({
        url:'/query'
    })
}

export function createOne(){
    return request({
        url:'/creat',
    })
}

export function deleteOne(){
    return request({
        url:'/delete',

    })
}


