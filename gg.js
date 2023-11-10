const api="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";
const inp= document.getElementById("in");
const im= document.getElementById("im");
// const imgg=document.querySelectorAll(".main .amg div img")
// console.log(imgg.classList.remove("show"));

let data;
const oncl = async()=>{
    //resqust
    const met={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256x256"
            }
        )

    }

    const res =await fetch("https://api.openai.com/v1/images/generations",met)
    //parse
    data=await res.json()
    // console.log(data)
    const le=data.data;
    im.innerHTML=""
    le.map(php=>{
        const con=document.createElement("div")
        im.append(con)
        const imgg=document.createElement("img");
        con.append(imgg)
        imgg.src=php.url
        imgg.style.width="100%"
        imgg.style.height="100%"
        // console.log(im)
    })


    // for(let i=0;i<3;i++){
    //     imgg[i].setAttribute(src,)
    // }

};
