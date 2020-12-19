
import { Octokit } from '@octokit/rest'

let TOKEN = process.env.TOKEN
let REPOSITORY = process.env.REPOSITORY

let [owner, repo] = REPOSITORY.split('/')

function checkSubmission(url) {
  if (url.match(/(\s@|^@)/)) {
    return false
  }
  return true
}

module.exports = async (req, res) => {
  let { url } = req.body

  if (checkSubmission(url)) {
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
  } else {
    res.status(200).send('你所提交了并非链接的内容，如有疑问请前往duty-machine-form项目提交issue。')
  }
}