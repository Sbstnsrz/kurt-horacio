let left = document.querySelector(".left");
left.onclick = pageDown;

let right = document.querySelector(".right");
right.onclick = pageUp;

let page = 0;
setPage(page);

right.innerHTML = "&gt;";
left.innerHTML = "";     


function pageDown(){
    page--;
    setPage(page);
    console.log(page);
    if(page<1){
        left.innerHTML = "";
    }
    else{
        right.innerHTML = "&gt;";     
    }
}

function pageUp(){
    page++;
    setPage(page);
    console.log(page);
    if(page>5){
        right.innerHTML = "";
    }
    else{
        left.innerHTML = "&lt;";
    }
}

function setPage(page){
    let img = document.querySelector("main");
    switch(page){
        case 0: {img.style.background = "url('img/logo-blanco.png') top / contain no-repeat"; break;}
        case 1: {img.style.background = "url('img/entradas-frias.jpg') top / contain no-repeat"; break;}
        case 2: {img.style.background = "url('img/entradas-calientes.jpg') top / contain no-repeat"; break;}
        case 3: {img.style.background = "url('img/carne-ternera.jpg') top / contain no-repeat"; break;}
        case 4: {img.style.background = "url('img/carne-cerdo-fresco.jpg') top / contain no-repeat"; break;}
        case 5: {img.style.background = "url('img/aves.jpg') top / contain no-repeat"; break;}
        case 6: {img.style.background = "url('img/pesca-frutos-secos.jpg') top / contain no-repeat"; break;}
    }
}


