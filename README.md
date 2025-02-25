Deployment instructions:
```
git merge master --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin github-pages
```
