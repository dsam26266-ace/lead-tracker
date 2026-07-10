
const save_btn_el = document.getElementById("input-btn")

const input_el = document.getElementById("input-el");
let leads = []

save_btn_el.addEventListener("click",function(){
    leads.push(input_el.value)
    console.log(leads)
})