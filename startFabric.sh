#!/bin/bash

set -e

# don't rewrite paths for Windows Git Bash users
export MSYS_NO_PATHCONV=1


CC_SRC_PATH="${PWD}/chaincode/fabcar/"
CC_SRC_LANGUAGE="go"

# launch network; create channel and join peer to channel
pushd $HOME/fabric-samples/test-network
./network.sh down
./network.sh up createChannel -ca -s couchdb
./network.sh deployCC -ccn fabcar -ccv 1 -cci initLedger -ccl ${CC_SRC_LANGUAGE} -ccp ${CC_SRC_PATH}
popd