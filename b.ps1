$repourl = Read-Host 'Enter the repository URL ->'
$reponame = Read-Host 'Enter the main branch name ->'

$repourl = $repourl+".git"

git init
git remote add origin $repourl
git branch -M $reponame
git push -u origin $reponame