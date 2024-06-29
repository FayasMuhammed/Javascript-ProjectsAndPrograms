

fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then(data=>displayPosts(data))

function displayPosts(posts){

    htmlData=``

    for (p of posts){

        htmlData+=`
         <div class="col-3"></div>
           <div class="col-6 p-5 mt-4  border shadow" >
                <h1 class="pb-3"><b><u>Title</u> : ${p.title}</b></h1>
                <u>Content</u> : ${p.body}
           </div>
           <div class="col-3"></div>
        `
    }
    document.querySelector("#root").innerHTML=htmlData
}

