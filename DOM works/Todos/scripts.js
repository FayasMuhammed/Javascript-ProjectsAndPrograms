
fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then(data=>displayTodos(data))

function displayTodos(todos){

    htmlData=``

    for (t of todos){

        htmlData+=`
        <div class="col-1"></div>
            <div class="col-10" >
                <div class="row m-1 " >
                    <div class="col-1 shadow p-3">${t.id}</div>
                    <div class="col-9 shadow p-3">${t.title}</div>
                    <div class="col-2 shadow p-3 text-center">${t.completed}</div>
                </div>

            </div>
            <div class="col-1"></div>
        `
    }
    document.querySelector("#root").innerHTML=htmlData
}








