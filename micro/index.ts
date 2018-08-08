const { send, text } = require('micro')
const qs = require('query-string')
const url = require('url') 
const assign = require('object-assign')

interface IParams {
  content: string,
  speaker: string
}

const stage = (x: IParams) => `${x.speaker}: ${x.content}`


module.exports = (req: any, res: any) => {
  const query = qs.parse(url.parse(req.url).search);
  console.log(query)

  const x: IParams = assign({}, { content: 'Hello!!', speaker: 'Charles' }, query)

  send(res, 200, stage(x));
}