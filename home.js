function ageInDays(){
var birthyear=prompt('What year you were born .... My friend ?');
var currYear=prompt('What is the current year going on ?');
var res=(currYear-birthyear)*365;
var h3=document.createElement('h3');
var textAns=document.createTextNode('You are '+res+' days old');
h3.setAttribute('id','ageInDays'); //setting up the attribute
h3.appendChild(textAns); //setting up the textAns inside h1
document.getElementById('flex-box-result').appendChild(h3); //append answer in the result
} 
//for reset button 
function reset(){
    // document.getElementById('flex-box-result') we dont use this
    document.getElementById('ageInDays').remove();
}

