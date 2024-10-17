import {createMint} from '@solana/spl-token';


import {getKeypairFromEnvironment ,getExplorerLink} from "@solana-developers/helpers";



import {Connection, PublicKey,   Transaction, SystemProgram, TransactionInstruction, clusterApiUrl, sendAndConfirmTransaction ,LAMPORTS_PER_SOL} from "@solana/web3.js";

import { createMemoInstruction } from "@solana/spl-memo";



const sender = getKeypairFromEnvironment("SECRET_KEY");

console.log("Sender public key: ", sender.publicKey.toBase58());    


const  connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const DECIMALS = 6;



    console.log("Token mint: ", tokenMint);
   //const  signature = sendAndConfirmTransaction(connection, transaction, [sender]);

const link = getExplorerLink("address" , sender.publicKey.toBase58(), "devnet");

console.log("Explorer link: ", link);