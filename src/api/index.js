import Vue from 'vue'

// const prefix = process.env.NODE_ENV === 'production' ? 'https://1701025328976508.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/DoctorHelper-backend/doctor_helper' : '/doctor_helper'
const prefix = process.env.API

const apis = {
  login: {
    login: `${prefix}/login`, // 登录
  },
}

Vue.prototype.$apis = apis
