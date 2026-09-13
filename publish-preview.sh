#!/usr/bin/env bash
# Публикация превью на GitHub Pages: daviddavidso.github.io/moment
# Плоский git push виснет (нет credential helper) — ходим через gh.
set -euo pipefail
cd "$(dirname "$0")"
REPO="Daviddavidso/moment"
export GIT_TERMINAL_PROMPT=0

git add -A
git commit -q -m "${1:-обновление витрины}" || echo "нечего коммитить"
git -c credential.helper='!gh auth git-credential' push -u origin main
echo "готово: https://daviddavidso.github.io/moment/"
