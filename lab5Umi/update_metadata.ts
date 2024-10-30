import { PublicKey, Umi } from "@metaplex-foundation/umi";
import {
    updateV1,
    fetchMetadataFromSeeds,
  } from '@metaplex-foundation/mpl-token-metadata'
  
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";

import base58 from "bs58";
import { getExplorerLink } from "@solana-developers/helpers";
 
export async function updateMetadata(
    umi: Umi,
    newMetadata: any,
    mintAddress : any,
    authority: any,
  ) {
    try {

    // const mint = generateSigner(umi);

    // old meta data
    const initialMetadata = await fetchMetadataFromSeeds(umi, { mint:  mintAddress.publicKey })
    console.log("Initial Metadata: ", initialMetadata)

    console.log("autority" , authority , "MInt addres" , mintAddress) 
    const tx = await updateV1(umi, {
    mint: mintAddress.publicKey,
    authority: authority,
    data: { ...initialMetadata, name: "ALADIN UPDATED"   }, // ...initialMetadata.data
    }).sendAndConfirm(umi)


    const signature = base58.encode(tx.signature);
  
    let explorerLink = getExplorerLink("tx", signature, "devnet");
    console.log(`Succesfully Updated metadata! Check out your TX here:\n${explorerLink}`);
  
  } catch (error) {
    console.log("Oops.. Something went wrong with updating the metadata", error);
  }
}