function createP(word){
    var p = document.createElement('p'); 
    var textNode = document.createTextNode(word);
    p.appendChild(textNode);
    var x = document.getElementsByTagName("body")[0]; 
    x.appendChild(p);
}

function setUp(){
    console.log('dentro de setUp');
    
    delay(1000)
    .then(() => createP("Hola mundo!"))
    .catch((err) => console.err(err))
    .then(delay(2000)
    .then(() => coloring()))
}

function delay(time){
    return new Promise((resolve,reject) => {
        if(isNaN(time)){
            reject(new Error('Delay requires a valid number'))
        }
        else{
            setTimeout(resolve,time)
        }
    });
}

function coloring(){
    var elementos = document.getElementsByTagName('*');

    for (let index = 0; index < elementos.length; index++) {
        var e = elementos[index];
        e.style.margin = "0";
    }

    let x = document.getElementsByTagName('p')[0];
    x.style.background =   "blue";
    x.style.color =  "white";
    x.style.fontWeight = "bolder";
    x.style.fontSize = "30px";
    
}


window.onload = function get_body() {
    setUp();
}


