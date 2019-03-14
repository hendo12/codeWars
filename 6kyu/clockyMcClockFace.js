var whatTimeIsIt = function(angle) {
  let hours = Math.floor(angle/30);
  let minutes = Math.floor((angle%30) * 2);

  if (hours === 0){
    hours = 12;
  } else if (hours < 10 && hours > 0){
    hours = "0"+ hours;
  } 
  if (minutes < 10 && minutes >= 0){
    minutes = "0"+ minutes;
  }  

  return hours + ":" + minutes;
}