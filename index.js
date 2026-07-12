
const save_btn_el = document.getElementById("input-btn");

const input_el = document.getElementById("input-el");
let myleads = []

const ul_el = document.getElementById("unorderlist-el");
const delete_el = document.getElementById("delete-btn");
const tab_btn = document.getElementById("tab-btn");

const myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("names"));

if(myLeadsFromLocalStorage){
    myleads = myLeadsFromLocalStorage;
    renderLeads(myleads);
}

save_btn_el.addEventListener("click",function(){
    myleads.push(input_el.value)
    renderLeads(myleads)

    localStorage.setItem("names",JSON.stringify(myleads))
    input_el.value = ""
})

tab_btn.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentwindow:true}, function(tabs){
       
       myleads.push(tabs[0].url)
       localStorage.setItem("names",JSON.stringify(myleads))
       renderLeads(myleads)

    })
    
})

delete_el.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads = []
    
    renderLeads(myleads)
})

function renderLeads(leads){
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