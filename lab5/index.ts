import {Connection} from "@solana/web3.js";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { keypairIdentity, Metaplex , irysStorage} from "@metaplex-foundation/js";

import "dotenv/config";


const nftData = { 
                name: "SDP ALADIN nft" , 
                symbol: "ALADIN",
                description : "Fly, aladin, fly - Solana developers Program - RO web3 comets ",
                imgPath : "./src/aladin.png" 
            };
             

async function main() {
    console.log("Creating NFT");
    console.log("NFT Data: ", nftData);
    console.log("NFT Image Path: ", nftData.imgPath);

    const connection = new Connection("https://api.devnet.solana.com");
    const keypair = getKeypairFromEnvironment("SECRET_KEY");

    console.log("Connection established to devnet & KEYPAIR loaded");

    // Create NFT

    const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(keypair))
    .use(irysStorage({address : "https://devnet.bundlr.network", providerUrl: "https://devnet.solana"})); ;
    
}