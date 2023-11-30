pnpm docs:build
mv ./src/.vuepress/dist ./docs -f
cp ./CNAME ./docs/CNAME
git add *
git commit -m'覆盖'
git push -f