let txt = document.querySelector('.second');
let txtload = ()=>{
    setTimeout(() => {
       txt.innerHTML ="Frontend Developer" ;
    }, 0);
    setTimeout(() => {
        txt.innerHTML ="APP Developer" ;
     }, 5000);
     setTimeout(() => {
        txt.innerHTML ="Web Developer" ;
     },10000);
     setTimeout(() => {
        txt.innerHTML ="Backend Developer" ;
     },15000);
}

txtload();
setInterval(txtload,20000);