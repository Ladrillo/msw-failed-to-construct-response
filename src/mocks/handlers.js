import { rest } from 'msw'
import { articles } from './data'

function getArticles(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(articles),
  )
}

export const handlers = [
  rest.get('https://lambda-times-api.herokuapp.com/articles', getArticles),
]
