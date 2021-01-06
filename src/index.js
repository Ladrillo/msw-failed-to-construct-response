import { worker } from './mocks/browser'

worker.start()

const Image = (src) => {
  const image = document.createElement('img')
  image.src = src
  return image
}

fetch('https://lambda-times-api.herokuapp.com/articles')
  .then(res => res.json())
  .then(data => {
    document.body.appendChild(Image(data.articles.javascript[0].authorPhoto))
  })
