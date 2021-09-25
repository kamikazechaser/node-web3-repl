### node-web3-repl

[![license: Unlicense](https://img.shields.io/badge/license-Unlicense-brightgreen)](https://opensource.org/licenses/Unlicense)

#### Features

- Web3 v 1.x
- Supports promisified methods

#### Installation

`npm i -g node-web3-repl`

#### Usage

- `web3-repl` : Launches REPL connected to Ethereum Mainnet
- `web3-repl [rpc endpoint]` : Connect to a custom RPC endpoint

#### Promisified methods

Use the `await` keyword, for example:

`> await web3.eth.getBlock(1)`
