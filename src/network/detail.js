import {request} from './request.js'

export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommendData(){
    return request({
        url:'recommend'
    })
}

export class Goods{
    constructor(columns,itemInfo,shopInfo){
        this.title = itemInfo.title;
        this.columns =  columns;
        this.desc = itemInfo.desc;
        this.discount = itemInfo.discountDesc;
        // this.newPrice = itemInfo.newPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.services = shopInfo.services;
        this.realPrice = itemInfo.lowNowPrice;
    }
}

export class Comments{
    constructor(user,images,content,created,style){
        this.uname = user.uname
        this.avatar = user.avatar
        this.content = content
        this.created = created
        this.style = style
        // this.images = images[0]
    }
}
