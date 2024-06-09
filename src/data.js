import moment from 'moment'
export const API_KEY = 'AIzaSyBMVVweHljhvTQAmR5RD_A5FQeayfmTCd8'
export const  converter =  (value)=>{
if(value >= 1000000){
    return Math.floor(value/1000000)+'M';
}
if(value >= 1000){
    return Math.floor(value/1000)+'K';
}
else{
    return value;
}
}
export const  getTime = (date) => {
    let result = moment(date).fromNow();
    const now = moment();
    const days = now.diff(date, 'days');
    const weeks = now.diff(date, 'weeks');
    if (days >= 7) {
      if (days <= 13) {
        result = `a week ago`;
      } else if (days > 13 && days <= 25) {
        result = `${weeks} weeks ago`;
      }
    }
    return result;
  };