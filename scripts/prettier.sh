#!/bin/bash

# Function to print colored messages
print_error() {
  echo -e "\033[0;31m$1\033[0m"
}

print_success() {
  echo -e "\033[0;32m$1\033[0m"
}

echo "Executing Prettier Script..."

# Parse optional --write flag
WRITE_FLAG=false
if [[ "$1" == "--write" ]]; then
  WRITE_FLAG=true
fi

# Get a list of all staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|jsx|ts|tsx|css|scss|md|json)$')

# If there are no staged files, exit
if [ -z "$STAGED_FILES" ]; then
  print_success "No staged files to format."
  exit 0
fi

echo "$STAGED_FILES"

# Determine the Prettier command based on the --write flag
if [ "$WRITE_FLAG" = true ]; then
  PRETTIER_COMMAND="npx prettier --write"
else
  PRETTIER_COMMAND="npx prettier --check"
fi

# Run Prettier on the staged files
ERROR_FILES=()
for FILE in $STAGED_FILES; do
  $PRETTIER_COMMAND "$FILE" > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    ERROR_FILES+=("$FILE")
  fi
done

printf "\n\n"

# Check if there were any error files
if [ ${#ERROR_FILES[@]} -ne 0 ]; then
  print_error "Prettier found issues in the following files:"
  for FILE in "${ERROR_FILES[@]}"; do
    echo "$FILE"
  done
  exit 1
elif [ "$WRITE_FLAG" = false ]; then
  print_success "Everything is pretty!"
  exit 0
fi

# If --write flag is set, add the formatted files back to the staging area
if [ "$WRITE_FLAG" = true ]; then
  echo "$STAGED_FILES" | xargs git add
  print_success "Error files formatted and added to staging area"
fi
