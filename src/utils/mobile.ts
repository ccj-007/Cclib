/**
 * 判断是否是pc、移动端
 */
export function isPC() {
  /*true则pc，false则mobile*/
  let u = navigator.userAgent;
  let Agents = [
    'Android',
    'iPhone',
    'webOS',
    'BlackBerry',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ];
  let flag = true;
  for (let i = 0; i < Agents.length; i++) {
    if (u.indexOf(Agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * 判断客户端来源
 */
export function judgeClient() {
  let client = '';
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    client = 'iOS';
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    client = 'Android';
  } else {
    client = 'PC';
  }
  return client;
}
