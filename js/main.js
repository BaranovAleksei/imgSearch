const sendForm = document.getElementById('sendForm')
const pointerRender = document.getElementById('gallery')
const gallery = document.querySelector('.gallery')

sendForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchNameImg = document.getElementById('searchNameImg').value
  const url = `https://api.unsplash.com/search/photos?per_page=10&page=1&query=${searchNameImg}`
  document.getElementById('searchNameImg').value = ''

  makeRequest('GET', url)
    .then(data => {
      if ( data.total !== 0) {
        renderSearchImg(data.results)
      } else notFoundPhoto()
    })
    .then(err => console.log(err))
  }
)

function notFoundPhoto () {
  document.getElementById('gallery').innerHTML = "";
  let sp = document.createElement('span')
  sp.innerHTML = 'фото не найденo, попробуйте изменить запрос'
  sp.className = 'notPhoto'
  pointerRender.appendChild(sp)
}

function makeRequest(method, url) {
  const headers = {
    "Authorization": "Client-ID -dkXdY0X4XMvtNfqESKQXwy3ItkXWHCkVeb-T1EAX_Y",
    'Content-Type': 'application/json;charset=utf-8'
  }
  return fetch(url, {
    method: method,
    headers: headers
  })
    .then(response => {
      return response.json()
    })
}

function renderSearchImg (data) {
  document.getElementById('gallery').innerHTML = "";
  let arrayImg = []
  data.map(el => {
    let elemImg = {
      classNameDiv: 'divSearchClass',
      src: el.urls.thumb,
      classNameImg: 'imgSearch',
      openUrlImg: el.urls.small
    }
    d = document.createElement('div')
    d.className = elemImg.classNameDiv
    d.addEventListener( 'click', e => {
      e.preventDefault()
      openImgFull(elemImg.openUrlImg)
    })
    pointerRender.appendChild(d)
    let img = new Image()
    img.src = elemImg.src
    img.className = elemImg.classNameImg
    d.appendChild(img)
    arrayImg.push(elemImg)
  })
  return arrayImg
}

function  openImgFull (src) {
  let divOpenFullImg = document.createElement('div')
  divOpenFullImg.className = 'fullImg'
  divOpenFullImg.addEventListener('click' , e => {
    e.preventDefault()
    divOpenFullImg.remove()
  })
  let img = new Image()
  img.src = src
  divOpenFullImg.appendChild(img)
  document.body.appendChild(divOpenFullImg)
}
