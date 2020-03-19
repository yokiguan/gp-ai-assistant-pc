
<template>
  <div class="planContent">
    <div class="guidepage">
      <header>
        <div class="foot_icon">
          <img src="@/assets/logo.png" width="35" alt />
          <a>见道科技</a>
        </div>
      </header>
      <el-row class="infoStyle">
        <el-col :span="5" class="person_info">
          <div class="info_item">
            <div>姓名</div>
            <span>Name</span>
          </div>
          <el-col class="info_data">{{data.info.name}}</el-col>
        </el-col>
        <el-col :span="5" class="person_info">
          <div class="info_item">
            <div>性别</div>
            <span>Gender</span>
          </div>
          <el-col class="info_data">{{data.info.gender}}</el-col>
        </el-col>
        <el-col :span="5" class="person_info">
          <el-row class="info_item">
            <el-col>年龄</el-col>
            <el-col>Age</el-col>
          </el-row>
          <el-col class="info_data">{{data.info.age}}</el-col>
        </el-col>
        <el-col :span="9" class="person_info">
          <el-row class="info_item">
            <el-col>身份证号</el-col>
            <el-col>ID Number</el-col>
          </el-row>
          <el-col class="info_data">{{this.$route.query.id_card}}</el-col>
        </el-col>
      </el-row>
      <h2>健康管理指导</h2>
      <div class="part1 separate">
        <div class="part-title">
          <div class="part">PART 01</div>
          <a class="cn">本次随访任务</a>
          <a class="en">Daily Task</a>
        </div>

        <div class="container">
          <el-row class="part-outbox">
            * 此期间（{{data.start_time}}-{{data.end_time}}）您需要完成以下任务：
            <div v-for="(item,index) in data.data.part_1" :key="item.mission_name" class="part-content">
              <el-col :span="8" class="first-standard">{{item.mission_name}}</el-col>
              <el-col
                :span="24"
                v-for="(goal,pos) in item.smart_goal_list"
                :key="goal"
                class="second-standard"
              >{{pos+1}}.{{goal}}</el-col>
            </div>
          </el-row>
        </div>
      </div>
      <div class="part2 separate">
        <div class="part-title">
          <div class="part">PART 02</div>
          <a class="cn">健康状况</a>
          <a class="en">Diagnosis ＆ Risk</a>
        </div>
        <div class="container">
          <el-row class="part-outbox">
            <div class="part-content">
              <el-col :span="8" class="first-standard">确诊情况</el-col>
              <el-col
                v-for="(item,index) in data.data.part_2.disease_list"
                :key="item.disease"
                :span="24"
                class="second-standard"
              >
                <el-col :span="10" class="diagnosis">*确诊{{index+1}}：{{item.disease}}</el-col>
                <el-col :span="14" class="diagnosis-data">*{{item.value}}</el-col>
              </el-col>
              <el-col :span="8" class="first-standard">潜在风险</el-col>
              <el-col
                :span="24"
                v-for="(item,index) in data.data.part_2.problem_list"
                :key="item.problem"
                class="second-standard"
              >
                <el-col :span="10" class="diagnosis">*{{item.problem}}</el-col>
                <el-col :span="14" v-if="item.value" class="diagnosis-data">*{{item.value}}</el-col>
              </el-col>
            </div>
          </el-row>
        </div>
      </div>
      <div v-if="data.data.part_3.length!=0" class="part3 separate">
        <div class="part-title">
          <div class="part">PART 03</div>
          <a class="cn">疾病释义</a>
          <a class="en">Overview</a>
        </div>
        <div class="container">
          <el-row class="part-outbox">
            <div v-for="(item,index) in data.data.part_3" :key="item.name" class="part-content">
              <el-col :span="8" class="first-standard">{{item.name}}</el-col>
              <el-col :span="24" v-html="item.content" class="second-standard">{{item.content}}</el-col>
            </div>
          </el-row>
        </div>
      </div>
      <div class="part4 separate">
        <div class="part-title">
          <div class="part">PART 0{{data.data.part_3.length==0?'3':'4'}}</div>
          <a class="cn">健康任务相关知识</a>
          <a class="en">Health Education</a>
        </div>
        <div class="container">
          <el-row class="part-outbox">
            <div v-for="(item,index) in data.data.part_4" :key="item.mission_name" class="part-content">
              <el-col :span="8" class="first-standard">{{item.mission_name}}</el-col>
              <el-col :span="24" class="second-standard">{{item.introduction}}</el-col>
            </div>
          </el-row>
        </div>
      </div>
    </div>
    <div v-if="this.$store.state.shownCov" class="guidepage">
      <img style="width:100%;height:100%" src="../../assets/NCP.png" />
    </div>
    <div v-if="this.$store.state.shownCov" class="guidepage">
      <img style="width:100%;height:100%" src="../../assets/NCP2.png" />
    </div>
  </div>
</template>
<script>
export default {
  created() { 
   },
  data() {
    return {
      data: JSON.parse(this.$store.state.guidance)
    };
  },
  methods: {}
  // props: ["data"]
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.guidepage {
  width: 100%;
}
.foot_icon img {
  width: 40px;
}
.foot_icon a {
  font-size: 13px;
  color: #848391;
}
.infoStyle {
  border-bottom: 2px solid #0c6ba0;
  width: 100%;
  font-size: 18px;
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.person_info {
  display: flex;
  flex-direction: row;
  align-content: center;
  font-weight: 600;
  color: #0c6ba0;
}
.info_data {
  color: black;
  font-size: 20px;
  vertical-align: center;
}
.diagnosis-data {
  text-align: right;
}
.planContent {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 220mm;
  margin: 0 auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.planContent header {
  /* padding: 3px 0; */
  border-bottom: 1.1mm solid #0c6ba0;
  color: #848295;
  font-size: 22px;
}
.part-content {
  margin: 8px;
  font-size: 18px;
  line-height: 23px;
}
.first-standard {
  background-color: #0c6ba0;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  border-radius: 1rem;
  margin-top: 5px;
}

h2 {
  text-align: center;
  color: #0c6ba0;
  margin-top: 15px;
  padding: 0;
  margin-bottom: 15px;
}

.part-title {
  width: 218mm;
  height: 6.5mm;
  margin: 2mm 0mm 0mm;
  color: #0c6ba0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.part {
  width: 19.6mm;
  height: 6.5mm;
  background-color: #0c6ba0 !important;
  color: #ffffff;
  text-align: center;
  line-height: 6.5mm;
  font-size: 16px;
}

.cn {
  margin-left: 5px;
  font-size: 18px;
  font-weight: 600;
}
.en {
  margin-left: auto;
}
.separate {
  margin-bottom: 10px;
}

.mission_name {
  border-bottom: 1px solid #0c6ba0;
  line-height: 50px;
  margin-bottom: 10px;
}
.separate .container {
  margin-top: 10px;
  width: 213mm;
  min-height: 30px;
  padding: 10px 10px 10px;
  background: rgba(238, 238, 238, 1);
  border: 1px solid rgba(12, 107, 160, 1);
}
.container .contain_content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
