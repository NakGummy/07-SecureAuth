$repourl = Read-Host 'Enter the repository URL '
$reponame = Read-Host 'Enter the main branch name '

$commitmsg = Read-Host 'Enter commit message '

$repourl = $repourl+".git"

git init
git add .
git commit -m $commitmsg
git remote add origin $repourl
git push origin $reponame