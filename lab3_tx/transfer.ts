import "dotenv/config";


import {getKeypairFromEnvironment} from "@solana-developers/helpers";

import {Connection, PublicKey,   Transaction, SystemProgram, TransactionInstruction, clusterApiUrl, sendAndConfirmTransaction ,LAMPORTS_PER_SOL} from "@solana/web3.js";
import { createMemoInstruction } from "@solana/spl-memo";

const sender = getKeypairFromEnvironment("SECRET_KEY");
console.log("Sender public key: ", sender.publicKey.toBase58());

const  connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const RECEIVER_ADDRESS = "HcecXBVHRXrYGFKHHg33aPjuPqFN2L339nwZ28JewM9s";
const receiver = new PublicKey(RECEIVER_ADDRESS );

const transaction = new Transaction();

const amount = 0.1 ;

const transactionInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: amount * LAMPORTS_PER_SOL,
});

transaction.add(transactionInstruction);

const createMemo = createMemoInstruction("Hello from Solana");

const signature = sendAndConfirmTransaction(connection, transaction, [sender]);

const getTransactionHistory = async () => { 

    const transactionHistory = await connection.getConfirmedTransaction(sender.publicKey?.toBase58());
    console.log("Transaction history: ", transactionHistory);
}



transaction.add(createMemo);    
signature.then(sig => {
    console.log("Transaction signature: ", sig, " ✔️" );
}).catch(err => {
    console.error("Transaction failed: ", err);
});getTransactionHistory()
