#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
cd dist
git init
git add .
git commit -m 'deploy'
git push -f https://github.com/chachagof/shopping-site-front-end.git main:gh-pages

cd -