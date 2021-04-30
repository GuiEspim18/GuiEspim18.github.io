let link;
let add = [];
let itens = new Array();
function pushValue(value){
    itens.push(value)
    console.log(itens)
}
function insertIntoLink(phone, message){
    link = `https://api.whatsapp.com/send?phone=${phone}&text=${message}: `;
}
function clickItem(value, alerts){
    value.addEventListener("click",()=>{
        add.push(value.value)
        alertFunction(value, alerts)
    });
}
function send(value){
    value.addEventListener('click', ()=>{
        if(add.length>1){
            for(var addLen = add.length-1; addLen>=1; addLen--){
                link+=`${add[addLen]}, `
            }
            link+=`${add[0]}.`;
            value.href=link
        }else{
            link+=`${add[0]}.`;
            value.href=link
        }
    });
}
function alertFunction(value, alerts){
    let close = alerts.querySelector("div#divX");
    let span = alerts.querySelector("span#alertText");
    span.textContent=`${value.value} added.`;
    alerts.style.visibility="visible";
    alerts.style.marginLeft="1%";
    close.addEventListener("click",()=>{
        alerts.style.marginLeft="-100%";
        alerts.style.visibility="hidden";
        alerts.style.position="absolute";
    });
    setTimeout(()=>{
        alerts.style.marginLeft="-100%";
        alerts.style.visibility="hidden";
        alerts.style.position="absolute";
    }, 4000);
}