//const btn = document.getElementById('btn');
//const output = document.getElementById('container');
const url = 'data/itemFinal4.11.24.json';
//const url1 = '../copperfoxantiques.com.working/slideshow/js/finalItems.json';
//btn.onclick = () => {
    //console.log('clicked');
//}
//console.log(btn);

fetch(url)
.then(res => res.json())
.then(data => {
    const item = data;
    console.log(item);
});