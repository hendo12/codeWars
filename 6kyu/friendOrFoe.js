function friend(friends){
  var realFriends = [];
  for( let i = 0; i < friends.length; i++) {
    if(friends[i].length === 4) {
      realFriends.push(friends[i]);
    }
  }
  
  return realFriends;
}

// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }