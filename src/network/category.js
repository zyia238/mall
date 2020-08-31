import {request} from './request'

export function getCategoryData(){
    return request({
        url:'/category'
    })
}

export function getSubCategoryData(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}

export function getSubDetail(miniWallKey,type){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallKey,
            type
        }
    })
}