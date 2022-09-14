let scrollingDiv = document.querySelector('.scrolling-div')
let p = document.querySelector('p')
let body = document.querySelector('body')

scrollingDiv.addEventListener('scroll', function () {
  if (scrollingDiv.scrollTop > 600) {
    let p2 = document.createElement('p')
    p2.innerText = new Date()
    p2.style.padding = '2rem'
    p2.style.color = 'green'
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let color = `rgb(${r},${g},${b})`
    p2.style.color = color
    scrollingDiv.append(p2)
  }
})
