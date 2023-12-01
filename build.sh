pnpm docs:build
rm ./docs -rf
mv ./src/.vuepress/dist ./docs -f
cp ./CNAME ./docs/CNAME