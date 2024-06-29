

var products=[

    {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:23000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:25000,brand:"moto"},
    {id:7,title:"iphone13",price:140000,brand:"apple"},
    {id:8,title:"iphone13pro",price:150000,brand:"apple"},
  
]

// console.log(products.length);

var productName=products.map(p=>p.title)

// console.log(productName);

mobilePriceFilter=products.filter(p=>p.price<35000).map(p=>p.title)

// console.log(mobilePriceFilter);

var samsungMobileFilter=products.filter(p=>p.brand=="samsung" && p.price<50000).map(p=>p.title)

// console.log(samsungMobileFilter);

var CostlyProduct=products.reduce((p1,p2)=>p1.price>p2.price?p1.title:p2.title)


// console.log(CostlyProduct);

var sortedProduct=products.sort((o1,o2)=>o2.price-o1.price)

// console.log(sortedProduct);

var rangeProduct=products.filter(p=>p.price<=35000 && p.price>=25000).map(p=>p.title)

console.log(rangeProduct);