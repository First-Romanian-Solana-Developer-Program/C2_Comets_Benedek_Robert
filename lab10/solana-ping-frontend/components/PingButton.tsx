import { FC } from "react";
  import { PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
 import styles from "../styles/PingButton.module.css";
export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const pingProgramId = new PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
  const DATA_ACCOUNT_PUBKEY = `Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod`

  const onClick = async () => {
    if (!connection || !publicKey) {
    return;
    
    }
    
    const programId = new web3.PublicKey(pingProgramId);
    const programDataAccount = new web3.PublicKey(DATA_ACCOUNT_PUBKEY);
    const transaction = new web3.Transaction();
    
    const instruction = new web3.TransactionInstruction({
    keys: [
    {
    
    pubkey: programDataAccount,
    isSigner: false,
    isWritable: true,
    
    },
    ],
    programId,
    
    });
    
    transaction.add(instruction);
    const signature = await sendTransaction(transaction, connection);
    console.log(signature);
    };

  return (
    <div className={styles.buttonContainer}>
      <button  onClick={onClick}>
        Ping!
      </button>
    </div>
  );
};