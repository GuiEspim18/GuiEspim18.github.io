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
        if(value.textContent!="remove"){
            add.push(value.value);
            value.textContent="remove";
            alertFunction(alerts);
        }else if(value.textContent=="remove"){
            add.splice(add.indexOf(value.value), 1);
            value.textContent="add";
            removeAlert(alerts);
            // Preciso adicionar alguma forma para voltar a ter o conteúdo de texto antigo
        }
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
function alertFunction(alerts){
    let close = alerts.querySelector("div#divX");
    alerts.style.visibility="visible";
    alerts.style.background="green";
    alerts.style.marginLeft="1%";
    close.addEventListener("click",()=>{
        alerts.style.marginLeft="-100%";
        alerts.style.visibility="hidden";
        alerts.style.position="absolute";
    });
    if (alerts.style.visibility=="visible"){
        setTimeout(()=>{
            alerts.style.marginLeft="-100%";
            alerts.style.visibility="hidden";
            alerts.style.position="absolute";
        }, 3000);
    }
}
function removeAlert(alerts){
    let spanText = alerts.querySelector("span#alertText");
    let close = alerts.querySelector("div#divX");
    spanText.textContent="removed!"
    alerts.style.visibility="visible";
    alerts.style.background="red";
    alerts.style.marginLeft="1%";
    close.addEventListener("click",()=>{
        alerts.style.marginLeft="-100%";
        alerts.style.visibility="hidden";
        alerts.style.visibility="absolute";
    });
    if(alerts.style.visibility=="visible"){
        setTimeout(()=>{
            alerts.style.marginLeft="-100%";
            alerts.style.visibility="hidden";
            alerts.style.position="absolute";
        }, 4000);
    }
}