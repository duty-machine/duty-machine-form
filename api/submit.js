
import { Octokit } from '@octokit/rest'

let TOKEN = process.env.TOKEN
let REPO = process.env.REPO

let [owner, repo] = REPO.split('/')

module.exports = async (req, res) => {
  let { url } = req.body

  let octokit = new Octokit({ auth: TOKEN })
  let response = await octokit.issues.create({
    owner,
    repo,
    title: 'archive_request',
    body: url
  })

  await new Promise(resolve => setTimeout(resolve, 1000))

  res.setHeader('Location', response.data.html_url)
  res.status(302).send('')
}