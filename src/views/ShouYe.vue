<template>
  <div>
    <div class="tou">
      <div class="nav">
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">番剧</a></li>
          <li><a href="">直播</a></li>
          <li><a href="">游戏中心</a></li>
          <li><a href="">会员购</a></li>
          <li><a href="">漫画</a></li>
          <li><a href="">赛事</a></li>
          <li><a href="">下载客户端</a></li>
        </ul>
        <div class="nav_input">
          <input type="text"><img src="../assets/sousuo3.png" alt="">
        </div>
        <div class="nav_op">
          <i class="el-icon-user">
            <p>大会员</p>
          </i>
          <i class="el-icon-message">
            <p>消息</p>
          </i>
          <i class="el-icon-message">
            <p>动态</p>
          </i>
          <i class="el-icon-star-off">
            <p>收藏</p>
          </i>
          <i class="el-icon-time">
            <p>历史</p>
          </i>
          <i class="el-icon-s-opportunity">
            <p>创作者中心</p>
          </i>
        </div>
      </div>
      <div class="bilibili"></div>

    </div>
    <div class="Total_data">
      <div class="shuju">
        <div class="lii" v-for="(obj, index) in list" :key="index">
          <ul>
            <li>{{ obj.name }}</li>
          </ul>
        </div>
      </div>
      <div class="Offload_data">
        <i class="el-icon-document">
          <p>专栏</p>
        </i>
        <i class="el-icon-s-flag">
          <p>活动</p>
        </i>
        <i class="el-icon-chat-line-square">
          <p>社区中心</p>
        </i>
        <i class="el-icon-video-camera-solid">
          <p>直播</p>
        </i>
        <i class="el-icon-reading">
          <p>
            课堂
          </p>
        </i>
        <i class="el-icon-video-play">
          <p>
            热门视频
          </p>
        </i>
      </div>
    </div>
    <div class="bs">
      <div class="block">
        <!-- 左侧按钮 -->
        <div href="#" class="arrow-l" @click="clickindex('l')">
          <i class="ii"> &lt;</i>
        </div>
        <!-- 右侧按钮 -->
        <div href="#" class="arrow-r" @click="clickindex('r')">
          <i class="ii"> > </i>
        </div>
        <ul v-for="(obj, index) in imglist" :key="index" v-show="obj.id === clearindex">
          <li>
            <img :src="obj.imgname" alt="">
          </li>
        </ul>

      </div>
      <div class="Side_data">
        <i v-for="(item, index) in imglists" :key="index">
          <img :src="item.imgname" alt="">
          <p>文字</p>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      timer: '',
      clearindex: 0,
      list: [],
      imglist: [
        { id: 0, imgname: require('../assets/beijing/lunbo1.png') },
        { id: 1, imgname: require('../assets/beijing/lunbo2.png') },
        { id: 2, imgname: require('../assets/beijing/lunbo3.png') },
        { id: 3, imgname: require('../assets/beijing/lunbo4.png') },
        { id: 4, imgname: require('../assets/beijing/lunbo5.png') },
        { id: 5, imgname: require('../assets/beijing/lunbo6.png') },
        { id: 6, imgname: require('../assets/beijing/lunbo7.png') },
        { id: 7, imgname: require('../assets/beijing/lunbo8.png') },
      ],
      imglists: [
        { id: 0, imgname: require('../assets/beijing/lunbo1.png') },
        { id: 1, imgname: require('../assets/beijing/lunbo2.png') },
        { id: 2, imgname: require('../assets/beijing/lunbo3.png') },
        { id: 3, imgname: require('../assets/beijing/lunbo4.png') },
        { id: 4, imgname: require('../assets/beijing/lunbo5.png') },
        { id: 5, imgname: require('../assets/beijing/lunbo6.png') },
      ],
    }
  },
  methods: {
    getlist() {
      axios.get('/shuju.json').then(res => {
        console.log(res);
        this.list = res.data.nam
        console.log(this.list);
      })
    },
    clickindex(val) {
      if (val == 'r') {
        this.clearindex++;
        if (this.clearindex == this.imglist.length) {
          this.clearindex = 0;
        }
      } else {
        this.clearindex--
        if (this.clearindex < 0) {
          this.clearindex = this.imglist.length - 1;
        }
      }
    },
    set() {
      this.timer = setInterval(() => {
        this.clearindex++;
        if (this.clearindex > this.imglist.length - 1) {
          this.clearindex = 0
        }
      }, 2000)
    },

  },
  mounted() {
    this.getlist();
    this.set()
  },

}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.tou {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 200px;
  background-image: url(../assets/beijing01.jpg);
  background-size: 100% 200px;
}

.bilibili {
  background-image: url(../assets/bilibili.png);
  width: 200px;
  height: 100px;
  margin-left: 280px;
}

.nav {

  width: 90%;
  height: 60px;
  display: flex;
  padding-top: 20px;
  margin-left: 60px;
}

.nav ul {
  display: flex;
  justify-content: space-around;
  width: 500px;
  line-height: 38px;
}

.nav li {
  float: left;
  list-style: none;
  font-size: 14px;
}

.nav li a {
  text-decoration: none;
  color: #453f3f;
}

.nav_input {
  width: 400px;
  height: 40px;
  position: relative;
  border-radius: 8px 8px 8px 8px;
  background-color: #b1b1b1;
  opacity: 0.8;
  margin-left: 20px;
}

.nav_input:hover {
  background-color: #d6cccc;
}

.nav_input input:hover {
  background-color: #d6cccc;
}

.nav_input input {
  width: 300px;
  height: 40px;
  border: none;
  outline: none;
  float: left;
  border-radius: 8px 8px 8px 8px;
  background-color: #b1b1b1;
  font-size: 16px;
}

.nav_input input:focus {
  background-color: #fafafa;
}

.nav_input img {
  width: 30px;
  height: 30px;
  float: right;
  margin: 4px auto;
}

.nav_op {
  width: 500px;
  height: 50px;
  margin-left: 120px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ;
}

.nav_op i {
  width: 80px;
  height: 50px;
  text-align: center;
  color: #453f3f;
  margin-top: 10px;
}

.nav_op p {
  font-size: 14px;
}

.shuju {
  width: 900px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 170px;
}

.Total_data {
  width: 100%;
  height: 80px;
  display: flex;
}

.Offload_data {
  width: 300px;
  height: 70px;
  border-left: 1px solid rgb(203, 200, 200);
  margin-left: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.Offload_data i {
  width: 80px;
  display: flex;
  color: #61666D;
}

.Offload_data p {
  font-size: 16px;
}

.lii {
  width: 80px;
  height: 30px;
  text-align: center;
  background-color: #EFF1F2;
  border-radius: 10px;
  line-height: 30px;
  color: #7c7e82;
}

.lii li:hover {
  background-color: #DFE1E2;
  border-radius: 10px;
}

.block {
  position: relative;
  width: 590px;
  height: 340px;
  border-radius: 22px;
  margin: auto 100px;
  overflow: hidden;
}

.block img {
  width: 100%;
  height: 100%;
  display: block;
}

.block ul {
  width: 1000%;
}

.block ul li {
  float: left;
}

.arrow-l {
  left: 0;
  position: absolute;
  line-height: 40px;
  width: 40px;
  top: 50%;
  background-color: #453f3f;
  color: #fafafa;
  text-align: center;
  opacity: 0.5;
}

.arrow-r {
  right: 0;
  position: absolute;
  line-height: 40px;
  width: 40px;
  top: 50%;
  background-color: #453f3f;
  color: #fafafa;
  text-align: center;
  opacity: 0.5;
}

.bs {
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
}

.Side_data {
  width: 800px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.Side_data img {
  width: 230px;
  height: 180px;
  border-radius: 10px;
}
</style>