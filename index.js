
const save_btn_el = document.getElementById("input-btn")

const input_el = document.getElementById("input-el");
let leads = []

const ul_el = document.getElementById("unorderlist-el")

save_btn_el.addEventListener("click",function(){
    leads.push(input_el.value)
    renderLeads()
    input_el.value = ""
})

function renderLeads(){
    let listItems = ""

    for(let i=0;i<leads.length;i++){
        // listItems += "<li><a href='"+leads[i]+"' target='_blank'>"+leads[i]+"</a></li>"
        listItems+=`
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        
        `
    }

    ul_el.innerHTML = listItems
}