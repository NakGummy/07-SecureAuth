git add .
$commitMessage = Read-Host -Prompt 'Enter commit message'
git commit -m "$commitMessage"
git push