import "dotenv/config";

import {createMint, getOrCreateAssociatedTokenAccount, mintTo} from '@solana/spl-token';


import {getKeypairFromEnvironment ,getExplorerLink} from "@solana-developers/helpers";



import {Connection, PublicKey,   Transaction, SystemProgram, TransactionInstruction, clusterApiUrl, sendAndConfirmTransaction ,LAMPORTS_PER_SOL} from "@solana/web3.js";

import { createMemoInstruction } from "@solana/spl-memo";



const user = getKeypairFromEnvironment("SECRET_KEY");

console.log("Sender public key: ", user.publicKey.toBase58());    


const  connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const DECIMALS = 6;
const AMOUNT = 9;
const MINOR_UNITS_PER_MAJOR_UNITS = 10 ** DECIMALS;

const tokenMint = new PublicKey("AdMxt73W7MWEWvpvVSVGrCc2moND7cpKwVdZdNyyAcJS")
const tokenAccount = new PublicKey("FnEZJYNQDSq1yJEnAL6iFKDaFJYYz1LdMzgAzBr3preC") 
const destAccount = new PublicKey("DQRpQJFGm6PZ3SkVrfUVminezscma9Gbec2u7TchHZAB");

    //const  signature = sendAndConfirmTransaction(connection, transaction, [sender]);
// Let's mint the tokens to ourselves for now!
const recipientAssociatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    user.publicKey
    );
    
    const transactionSignature = await mintTo(
    connection,
    user,
    tokenMint,
    recipientAssociatedTokenAccount.address,
    user,
    AMOUNT * MINOR_UNITS_PER_MAJOR_UNITS
    );
    
    const link = getExplorerLink("transaction", transactionSignature, "devnet");
    
    console.log(`✅ Success! Mint Token Transaction: ${link}`);
 
 