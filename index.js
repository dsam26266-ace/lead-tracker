
const save_btn_el = document.getElementById("input-btn");

const input_el = document.getElementById("input-el");
let leads = []

const ul_el = document.getElementById("unorderlist-el");
const delete_el = document.getElementById("delete-btn");

 const myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("names"));

// if(myLeadsFromLocalStorage){
//     leads = myLeadsFromLocalStorage;
//     renderLeads();
// }

// console.log(myLeadsFromLocalStorage)

save_btn_el.addEventListener("click",function(){
    leads.push(input_el.value)
    renderLeads()

    localStorage.setItem("names",JSON.stringify(leads))
    input_el.value = ""
})

delete_el.addEventListener("dblclick",function(){
    localStorage.clear()
    leads = []
    
    renderLeads()
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