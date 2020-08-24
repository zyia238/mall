<template>
  <div class="detailwrapper">
    <detail-nav-bar @tabClick="tabClick"/>
    <scroll class="contents" ref="scrolls">
      <detail-swiper :swiperitems="itemInfo" />
      <detail-title :goods="goods" />
      <detail-images :imagesList="detailImage"/>
      <item-params :params="itemParams"/>
      <comments-more/>
      <comments :comments="comments"/>
      <goods-list :goods="recommendList"/>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import detailNavBar from "./childComponents/detailNavBar"
import detailSwiper from "./childComponents/detailSwiper"
import detailTitle from "./childComponents/detailTiltle"
import itemParams from "./childComponents/itemParams"
import commentsMore from "./childComponents/commentsMore"
import comments from "./childComponents/comments"
import detailImages from "./childComponents/detailImages"

import Scroll from "../../components/common/scroll/scroll"
import goodsList from "../../components/content/goodsList"

import { getRecommendData, getDetailData, Goods , Comments} from "../../network/detail"

export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailTitle,
    itemParams,
    Scroll,
    commentsMore,
    comments,
    goodsList,
    detailImages
  },
  data() {
    return {
      //详情页在这里通过路由地址的后缀对iid进行接收，并在详情页发送网络请求请求相关item的数据。
      iid: null,
      itemInfo: [],
      goods: {},
      detailImage:[],
      itemParams:{},
      comments:{},
      recommendList:[],
      topYs:[0,1000,2000,3000]
    };
  },
  mounted() {
    this.$bus.$on("detailimgload", () => {
      this.$refs.scrolls.bs.refresh();
    });
  },
  
  created() {
    this.iid = this.$route.params.iid;

    getRecommendData().then(res => {
      // console.log(res)  
      this.recommendList = res.data.data.list;
      // console.log(this.recommendList)

    })

    getDetailData(this.iid).then(res => {
      console.log(res);
      this.itemInfo = res.data.result.itemInfo.topImages;

      this.itemParams = res.data.result.itemParams;
      // console.log( this.itemParams)
      this.comments = new Comments(res.data.result.rate.list[0].user,
      res.data.result.rate.list[0].images,
      res.data.result.rate.list[0].content,
      res.data.result.rate.list[0].created,
      res.data.result.rate.list[0].style
      );
      // console.log(this.comments);

      this.goods = new Goods(
        res.data.result.columns,
        res.data.result.itemInfo,
        res.data.result.shopInfo,
        res.data.result.detailInfo
      );
      
      this.detailImage = this.goods.detailImage
      console.log(this.detailImage);
    });
  },
  methods:{
    tabClick(index){
      this.$refs.scrolls.bs.scrollTo(0,-this.topYs[index],300)
    }
  }
};
</script>

<style lang="" scoped>
.detailwrapper {
    height: 100vh;
}
.contents {
    height: calc(100% - 44px);
    position: relative;
    z-index: 998;
    background: #fff;
}
</style>
