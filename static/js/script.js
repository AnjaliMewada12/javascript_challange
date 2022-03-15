function ageInDays(){
var birthyear=prompt("What year were you born good friend?")
var age =(2022-birthyear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode("you are "+age+" days old");
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();   
}

function generateCat(){
    var image = document.createElement('img');
    var div =document.getElementById('flex-cat-gen');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}