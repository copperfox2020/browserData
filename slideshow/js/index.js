let i = 0;
var images = [];
var caption = [];
var time = 3000;
var showSlide = document.getElementById('currentslide');
var showCaption = document.getElementById('currentfigcaption');
var picturePrefix = 'https://copperfox-images-prod.s3.amazonaws.com/';
var pictureSuffix = '-290x290';
const pRButton = document.getElementById('pauseResume');
var timer;

const url = "../data/itemFinal4.11.24.json";

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
})

const displayItem = function(displayItem) {
    showSlide.src = picturePrefix + item[i].pictureArray[0].pictureId + pictureSuffix;
    showCaption.innerHTML = "<strong>" + item[i].title + "  $" + item[i].listPrice + "</strong>" + "<br>" + item[i].description;
    console.log(i + ' -' + item[i].title + " - $" + item[i].listPrice); 
}


/*var timer = setTimeout('changeImg()', time);*/

const pauseShow = function() {
    console.log('pause - show button clicked .....');
    clearTimeout(timer);
    if(pRButton.value =='running') {
    /*clearTimeout(timer);*/
    console.log('button clicked to pause');
    pRButton.value = 'paused';
    pRButton.style = 'background-color: red; font-size: 30px;';
    pRButton.innerText = "Resume";
    }

    else if(pRButton.value == 'paused'){
    console.log('button clicked to resume');
    pRButton.value = 'running';
    pRButton.innerText = 'Pause';
    pRButton.style = 'font-size: 30px; background-color: transparent;'
    changeImg();
    }
    
}

const back = function() {
    console.log('back button pressed');
    if (pRButton.value == 'paused')
        i = i-1;
    else if(pRButton.value =='running') {
        clearTimeout(timer);
        i = i-2;
        pRButton.value = 'paused';
        pRButton.innerText = "Resume";
        pRButton.style = 'font-size: 30px; background-color: red;'
    }
        if (i < 0)
    i = item.length - 1;

    displayItem(item);
}

const next = function(){
    console.log('next button clicked .... ');
    clearTimeout(timer);
    
    if (pRButton.value == 'paused')
        i = i + 1;
    else if(pRButton.value =='running') {
        /*i = i-2;*/
        clearTimeout(timer);
        pRButton.value = 'paused';
        pRButton.innerText = "Resume";
        pRButton.style = 'font-size: 30px; margin-left: 5px; background-color: red;'
    }
        if (i > item.length - 1)
            i = 0;
    

 displayItem(item);
}

function changeImg () {

    if (pRButton.value == 'paused'){
        console.log('going out of changeImg');
        pRButton.innerText = "Resume";
        pRButton.style = 'font-size: 30px; background-color: red';
        return;
    }    
    else {
    
    displayItem(item); 
    
    if (i < item.length - 1) {
        i = i + 1;
        
    }
    else {
        i = 0;
    }
    timer = setTimeout('changeImg()', time);
    /*setTimeout('changeImg()', time);*/

    }}

    window.onload = changeImg;
