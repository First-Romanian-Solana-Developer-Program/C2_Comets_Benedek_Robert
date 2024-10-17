import { createMint } from "@solana/spl-token";
import "dotenv/config";
import {
getKeypairFromEnvironment,
getExplorerLink,
} from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const user = getKeypairFromEnvironment("SECRET_KEY");

const sender = getKeypairFromEnvironment("SECRET_KEY");

console.log("Sender public key: ", sender.publicKey.toBase58());    


 
const DECIMALS = 6;
 
 

 
const tokenMint =   await createMint(   
    connection,
    sender,     
    sender.publicKey,
     null,   
    DECIMALS);

    // console.log("Token mint: ", tokenMint.toBase58());
   //const  signature = sendAndConfirmTransaction(connection, transaction, [sender]);

const link = getExplorerLink("address" , tokenMint.toString(), "devnet");

console.log(`✅ Token Mint: ${link}`);
