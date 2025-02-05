 export function currentTime(){
     const date = new Date();
     const time = `${date.getFullYear()}-${(date.getMonth() + 1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1)}-${date.getDate()<10?"0"+date.getDate():date.getDate()}`;
   return time.toString()
}
export function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 32 + 1)) + 32;
  }