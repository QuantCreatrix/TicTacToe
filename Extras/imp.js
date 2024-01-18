for(let z = 0; z < winArray.length; z++){
        let windex = winArray[z];
        console.log(windex);
        let q = windex[0];
        let w = windex[1];
        let r = windex[2];
        let alt1 = boxes[q].children[0].alt;
        let alt2 = boxes[w].children[0].alt;
        let alt3 = boxes[r].children[0].alt;
        
        if(alt1 === alt2 && alt3 === alt2){
            if(alt1 === "cross"){
                console.log("cross won");
            }else if(alt1 === "circle"){
                console.log("Circle won");
            }
        }

    }


    // INIT CODE
    let boxes = document.getElementById('gameContainer').children;
    let turn = "cross";
    let count = 0;
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        box.addEventListener('click', game);
    }

    function game(){
        count+=1;
        if(turn === "cross"){
            document.addEventListener('click', (e)=>{
                e.preventDefault;
                let boxSelected = e.target;
                let boxImg = boxSelected.children[0];
                boxImg.alt = "cross";
                boxImg.src = "cross.png";
                turn = "circle";
            })
        }else{
            document.addEventListener('click', (e)=>{
                e.preventDefault;
                let boxSelected = e.target;
                let boxImg = boxSelected.children[0];
                boxImg.src = "circle.png";
                boxImg.alt = "circle";
                turn = "cross";
            })
        }
        
        if(count>=5){
            winCheck();
        }
    }