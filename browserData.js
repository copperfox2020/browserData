const btn = document.getElementById('btn');
const output = document.getElementById('container');
const url = 'finalItems.json';
const url1 = '../copperfoxantiques.com.working/slideshow/js/finalItems.json';
btn.onclick = () => {
    console.log('clicked');
}
//console.log(btn);
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
})
