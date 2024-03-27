#!/bin/bash

NVM_DIR=""


git pull

# Check if NVM is installed in /usr/local/nvm
if [ -f "/usr/local/nvm/nvm.sh" ]; then
    echo "NVM is installed in /usr/local/nvm."
    NVM_DIR="/usr/local/nvm"
# Check if NVM is installed in $HOME/.nvm
elif [ -f "$HOME/.nvm/nvm.sh" ]; then
    echo "NVM is installed in $HOME/.nvm."
    NVM_DIR="$HOME/.nvm"
else
    echo "NVM is not installed. Please install NVM first."
    exit 1
fi

# Source NVM
. $NVM_DIR/nvm.sh

# Check if Node.js 21 is installed
if nvm ls 21 >/dev/null 2>&1; then
    echo "Node.js 21 is already installed."
else
    echo "Installing Node.js 21."
    nvm install 21
fi

# Switch to Node.js 21
echo "Switching to Node.js 21."
nvm use 21

pm2 stop server
yarn install
yarn run client-install
yarn run client-build
pm2 start server --time
pm2 log