let script = document.createElement('script');
script.src = 'cats.js';
document.head.appendChild(script);

script.onload = function() {
    setTimeout(function() {
        for (let cat of cats){
            loadCat(cat)
        }
    }, 0);
};

function loadCat(cat){

    let divCatBlock = document.createElement("div")
    divCatBlock.className = "catBlock"
    divCatBlock.setAttribute("id", cat.id)

    let catName = document.createElement("h1")
    catName.innerHTML = cat.name
    catName.className = "catName"

    let divCatImg = document.createElement("div")
    divCatImg.className = "divImg"
    let img = document.createElement("img")
    img.src = cat.img_link
    img.alt = `${cat.name} - ${cat.description}`

    let isFavourite = document.createElement("div")
    isFavourite.className = "favourite fa fa-heart fa-5x"

    let divRating = document.createElement("div")
    divRating.innerHTML = "<b>Рейтинг:</b>"
    divRating.className = "rating"
    for (let i = 0; i < Number(cat.rate); i++){
        let star = document.createElement("i")
        star.className = "fa fa-light fa-star fa-lg star"
        divRating.appendChild(star)
    }

    let divCatInfo = document.createElement("div")
    let catAge = document.createElement("p")
    catAge.innerHTML = `<b>Возраст (лет):</b> ${cat.age}`
    let catDesc = document.createElement("p")
    catDesc.innerHTML = cat.description

    img.width = "300"

    document.body.appendChild(divCatBlock)
    divCatBlock.appendChild(catName)
    divCatBlock.appendChild(divCatImg)
    divCatImg.appendChild(img)
    if (cat.favourite){
        divCatImg.appendChild(isFavourite)
    }
    divCatBlock.appendChild(divRating)
    divCatBlock.appendChild(divCatInfo)
    divCatInfo.appendChild(catAge)
    divCatInfo.appendChild(catDesc)
}
