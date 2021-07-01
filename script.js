var lastFunctionCall;

var numIndicators =3;


var carouselString = document.getElementById("myCarousel").innerHTML;
var indicatorString = '<ol class="carousel-indicators" id="indicators">'
+ '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
+ '<li data-target="#myCarousel" data-slide-to="1"></li>'
+ '<li data-target="#myCarousel" data-slide-to="2"></li></ol>';

document.getElementById("myCarousel").innerHTML = indicatorString + carouselString;

var dataList = document.getElementById("indicators");
var carouselItemList = document.getElementById("carouselItemList");

var fileInput = document.getElementById("imageURL");
var titleInput = document.getElementById("imageTitle");
var captionInput = document.getElementById("imageCaption");

function onClickButton()
{  
    var string = '<li data-target="#myCarousel" data-slide-to="' + numIndicators + '"></li>';
    numIndicators += 1;
    dataList.innerHTML = dataList.innerHTML + string;

    console.log(fileInput)
    var item = `<div class="item">
    <img src="${fileInput.value}"
        alt="New York" style="width:100%;">
    <div class="carousel-caption">
        <h3>${titleInput.value}</h3>
        <p>${captionInput.value}</p>
    </div>`;

    carouselItemList.innerHTML += item;
}

function spawnKhabib()
{
    var img = document.createElement('img');
    img.src = 'https://cdn.discordapp.com/attachments/690455378198003714/859916356828135434/unknown.png';
    img.classList.add("col-1");
    document.getElementById('khabib').appendChild(img);
}