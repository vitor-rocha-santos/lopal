async function lagarta(){
 
    let frames = [

    "()()()(^^)"
    ()

    ];
 
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
 
    let espacos = "";
 
    for(let i = 0; i < 30; i++){
 
        for(let f = 0; f < frames.length; f++){
            console.clear();
            console.log(espacos + frames[f]);
            await sleep(700);
        }
 
        espacos += " ";
    }
}
 
lagarta();
 