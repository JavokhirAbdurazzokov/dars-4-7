let arraymeva=["bmw","mersedes","nissan","alfa rameo","labargini","tayota","chevrolet","lexus"]
    let oarray=[]
    let moshinaa=[]

    console.log(arraymeva);


    for (const moshina of arraymeva) {
        if(moshina.includes("a")){
            oarray.push(moshina)
        }
        else{
            moshinaa.push(moshina)
        }
    };
    console.log("A harifi bor moshinalar", oarray);
    console.log("A harifi yoq moshinalar", moshinaa);