// your code here
let cakeName = document.getElementById('cake-name')
let cakeImage = document.getElementById('cake-image')
let cakeDes = document.getElementById('cake-description')
let cakeReview = document.getElementById('review-list')
let cakeList = document.getElementById('cake-list')
let reviewForm = document.getElementById('review-form')
let reviewInfo = document.getElementById('review')

let request = async () => {
    let req = await fetch('http://localhost:3000/cakes')
    let res = await req.json()
    // deliverable 1
    cakeName.innerText = res[0].name
    cakeImage.src = res[0].image_url
    cakeImage.alt = res[0].name
    cakeDes.innerText = res[0].description
    res[0].reviews.forEach((element) => {
        let li = document.createElement('li')
        li.innerText = element
        cakeReview.append(li)
    })
    // deliverable 2
    res.forEach((element) =>{
        let li = document.createElement('li')
        li.innerText = element.name
        cakeList.append(li)
    })
    // deliverable 3
    reviewForm.addEventListener('submit', (action =>{
        action.preventDefault()
        let li = document.createElement('li')
        li.innerText = reviewInfo.value
        cakeReview.append(li)
        action.target.reset()
    }))
}

request()