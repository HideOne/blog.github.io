git pull
if [ $? -ne 0 ]; then
    exit 1
fi
pnpm docs:build
rm ./docs -rf
mv ./src/.vuepress/dist ./docs -f
cp ./CNAME ./docs/CNAME
git add *
git commit -m'覆盖'
git push -f