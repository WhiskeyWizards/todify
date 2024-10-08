#!/usr/bin/env bash

CHECKED=true

./scripts/lint.sh
LINT_CODE=$?
if [ $LINT_CODE = 1 ]; then
  CHECKED=false
fi

printf "\n\n"
./scripts/prettier.sh
FORMATTER_CODE=$?
if [ $FORMATTER_CODE = 1 ]; then
  CHECKED=false
fi

if [ $CHECKED = false ]; then
  printf "\n\n"
  echo -e "\033[0;31mPre-checks failed.\033[0m"
  exit 1
else
  exit 0
fi
