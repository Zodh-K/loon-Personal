var zodh = JSON.parse($response.body);
const vip1 = '/sns/json/profile/get_info';
const vip2 = '/json/member_new/homepage_info';
const vip3 = '/user/personal/json/profile';
const vip4 = '/flycard/novice';
const AD1 = '/shortvideo';

if ($request.url.indexOf(vip1) != -1){
  zodh.is_vip = 1;
  zodh.type = 7;
  zodh.grade = 1;
  zodh.is_adver_free = 0;
  zodh.expire_time = 4092599349000;
  zodh.member_type = 1;
  zodh.member_level = 1;
  zodh.max_expiration_days = 9999999;
  zodh.is_expire = 0;
  zodh.remain_day = 9999999;
  zodh.inkrity = 9999999;
  zodh.status = 1;
  zodh.is_purchase = true;
}

if ($request.url.indexOf(vip2) != -1){
  zodh.userTips = ["将在2099-09-09到期"];
  zodh.user_tips = ["将在2099-09-09到期"];
  zodh.is_member = true; 
  zodh.user_member_info.vip = 1;
  zodh.user_member_info.is_auto_member = 1;
}

if ($request.url.indexOf(vip3) != -1){
  zodh.personal_profile.inkrity = 9999999;
  zodh.personal_profile.is_vip = true;
  zodh.personal_profile.grade = 1;
  zodh.personal_profile.user_flag = true;
}

if ($request.url.indexOf(vip4) != -1){
  zodh.data.novice.adShow= 0;
  zodh.data.novice.expireTime = 4092599349000;
  zodh.data.novice.vipShow = 1;
}

if ($request.url.indexOf(AD1) != -1){
  zodh.item_list = [];
  zodh.rcmList = [];
  zodh.add_card_list = [];
}

$done({body : JSON.stringify(zodh)});
