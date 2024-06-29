const APIKEY="a1151588598441729d0c0016094d2356"

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`


// fetch(url).then(resp=>resp.json()).then(data=>displayNews(data))

async function getData(){

    let resp= await fetch(url)

    let data=await resp.json()

    displayNews(data)
}
getData()





function displayNews(news){

    let htmlData=``

    for (n of news.articles){

        htmlData+=`
        <a href="${n.url}">
     <div class="card mb-3">
  <img src="${n.urlToImage}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${n.title}</h5>
    <p class="card-text">${n.description}</p>
    <p class="card-text"><small class="text-body-secondary">${n.publishedAt}</small></p>
  </div>
</div>
</a>
        `
    }
    document.querySelector("#root").innerHTML=htmlData
}

// displayNews(news)

const categories=["business","entertainment","general","health","science","sports","technology"]

function displayCategories(categories){

    let htmlData=``


    for (c of categories){

        htmlData+=`
        
        <button value="${c}" class="mt-3 btn btn-success rounded shadow">${c}</button>

        `
    }
    document.querySelector("#button").innerHTML=htmlData
}

displayCategories(categories)


function fetchDataByCategory(event){

    let value=event.target.value

    fetch(url)

}
