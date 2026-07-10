
const save_btn_el = document.getElementById("input-btn")

const input_el = document.getElementById("input-el");
let leads = ["hseieddij","dhiedeopfhi"]

const ul_el = document.getElementById("unorderlist-el")

save_btn_el.addEventListener("click",function(){
    leads.push(input_el.value)
    console.log(leads)
})


for(let i=0;i<=leads.length;i++){
    ul_el.innerHTML += "<li>"+leads[i]+"</li>"
}
