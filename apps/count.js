module.exports = function(number){

// function words (number){

  var result = {};
  var wordArr = number.replace(/[\n\t]/gi, ' ')
  				   .replace(/ {2,}/g, " ").split(' ');
  wordArr.forEach (function (word){
  if (Object.hasOwnProperty.call(result, word)){
    result[word]+=1;
   } else {
  result[word]=1;
  }   

  });

return result;
}
// }

//match.(/\w+/g);