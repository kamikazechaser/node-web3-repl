#!/usr/bin/env node

const awaitRepl = require("await-repl");
const Web3 = require("web3");
const rangi = require("rangi");

let url = "https://main-light.eth.linkpool.io";
if (process.argv[2]) url = process.argv[2];

const web3 = new Web3(new Web3.providers.HttpProvider(url));
global.web3 = web3;

(async function () {
  try {
    console.log(rangi.green(`rpc: ${web3.currentProvider.host}`));
    console.log(rangi.green(`node: ${await web3.eth.getNodeInfo()}`));
    console.log(rangi.blue(`web3_version: ${await web3.version}`));

    // supports most node versions
    awaitRepl({
      rejectionHandler: (err) => `Promise rejection: ${err}`,
      awaitTimeout: 2000,
    });
  } catch (error) {
    console.log(rangi.red(`web3-cli: could not connect to node`));
    return process.exit(1);
  }
})();
