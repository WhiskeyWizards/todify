#!/bin/bash

# Function to print colored messages
print_error() {
  echo -e "\033[0;31m$1\033[0m"
}

print_success() {
  echo -e "\033[0;32m$1\033[0m"
}

# Get a list of all staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|jsx|ts|tsx)$')

# If there are no staged files, exit
if [ -z "$STAGED_FILES" ]; then
  print_success "No staged files to lint."
  exit 0
fi

# Run ESLint on all staged files together
npx eslint $STAGED_FILES
EXIT_CODE=$?

# Exit with the appropriate status code
if [ $EXIT_CODE -ne 0 ]; then
  print_error "ESLint Errors Found."
  exit 1
else
  print_success "No ESLint Errors Found."
fi

exit $EXIT_CODE
