import { TokenStandard, transferV1 } from "@metaplex-foundation/mpl-token-metadata";
 import {  publicKey, PublicKey, Umi } from "@metaplex-foundation/umi";
import { getExplorerLink } from "@solana-developers/helpers";
import base58 from "bs58";


export async function transferNft(
    umi: Umi,
     mintAddress : any,
     currentOwner : any,
     
  ) {
    try {

    // const mint = generateSigner(umi);
    const newOwner =  publicKey("HcecXBVHRXrYGFKHHg33aPjuPqFN2L339nwZ28JewM9s");
    // const newOwnerPDA = PublicKey.findProgramAddressSync(
    //     [newOwner.toBuffer()] ,
    //     mintAddress.publicKey 
    //  );

    const tx = await transferV1(umi, {
        mint: mintAddress,
        authority: currentOwner,
        tokenOwner: currentOwner.publicKey,
        destinationOwner: newOwner,
        tokenStandard: TokenStandard.NonFungible,
      }).sendAndConfirm(umi)

      

      const signature = base58.encode(tx.signature);
  
      let explorerLink = getExplorerLink("tx", signature, "devnet");
      console.log(`Succesfully Transfered! Check out your TX here:\n${explorerLink}`);
} catch (error) {
    console.log("Oops.. Something went wrong with Transfering the nft ", error);
  }
}

 

