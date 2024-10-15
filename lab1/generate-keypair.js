"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var keypair = web3_js_1.Keypair.generate();
console.log("Public key: ", keypair.publicKey.toBase58());
console.log("Secret key: ", keypair.secretKey.toString());
console.log("✅ Done");
