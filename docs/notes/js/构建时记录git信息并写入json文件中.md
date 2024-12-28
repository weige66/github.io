---
title: 构建时记录git信息并写入json文件中
createTime: 2024/12/28 23:50:33
permalink: /notes/js/构建时记录git信息并写入json文件中/
---
```js
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

function getGitInfo() {
  // 代码仓库的地址
  const gitRemoteUrl = childProcess.execSync('git config --get remote.origin.url').toString().trim()
  // git的分支信息
  const gitBranch = process.env.GIT_BRANCH || childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
  // 最后提交ID
  const lastCommitID = childProcess.execSync('git log -1 --format=%H').toString().trim()
  // 最后提交信息
  const lastCommitMessage = childProcess.execSync('git log -1 --format=%B').toString().trim()
  // 构建人信息
  const packagerName = childProcess.execSync('git config user.name').toString().trim()
  // 构建时间
  const buildDate = new Date().toLocaleString()
  // 构建类型
  const packagerType = process.env.JENKINS_URL ? 'jenkins' : 'manual'

  // 记录打包信息
  let infoArr = []
  infoArr.push('代码仓库: ' + gitRemoteUrl)
  infoArr.push('构建分支: ' + gitBranch)
  infoArr.push('最后提交: ' + lastCommitID)
  infoArr.push('最后提交: ' + lastCommitMessage)
  infoArr.push('构建类型: ' + packagerType)
  infoArr.push('构建作者: ' + packagerName)
  infoArr.push('构建时间: ' + buildDate)
  let infoStr = infoArr.join('\n')
  if (!fs.existsSync(path.resolve('./public/json'))) {
    fs.mkdirSync(path.resolve('./public/json'))
  }
  fs.writeFileSync(path.resolve('./public/json/gitinfo.json'), infoStr, 'utf8')
}

if (process.env.NODE_ENV === 'production') {
  getGitInfo()
} else if (process.env.npm_lifecycle_script && process.env.npm_lifecycle_script.includes('nstc-gitinfo')) {
  getGitInfo()
}
```