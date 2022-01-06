// import React from 'react'



// function solution(songs) {
//     const map = new Map();
//     let pair =0;
//     map.set(60,0);
//     for(let i=0; i < songs.length; i++){
//         songs[i]= songs[i]%60;
//         if(map.has((60-songs[i])%60)) pair+= map.get((60-songs[i])%60);
//         map.put(songs[i], map.get(songs[i],0)+1);
//     }
//     return pair;
// }

// console.log(solution([30,20,150,100,40]))

// function numPlayers( k, scores) {
//     scores.sort((a, b) => a - b);
//     let  i = 0;
//     let count = 0;

//     while(i < scores.length) {
//       let temp = scores[i];
//       if(scores[i] == 0) {
//         i++;
//         continue;
//       }
//       scores[i] = i + 1;
//       if((i + 1) <= k)
//         count++;
//       else
//         break;
//       i++;

//       while(i < scores.length && temp == scores[i]) {
//         scores[i] = scores[i - 1];
//         i++;
//         if(scores[i] <= k)
//           count++;
//       }
//     }
//    return count;
//   }

function numPlayers(k, scores) {
  scores.sort((a, b) => b - a);
  let prevScore = 0;
  let count = 0;
  let tempArray = [];
  for (let i = 0; i < scores.length; i++) {
    if (prevScore === scores[i]) {
      tempArray.push(count);
    } else {
      count++;
      tempArray.push(count);
    }
    prevScore = scores[i];
  }
  return tempArray.filter((i) => i <= k).length;
}
