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

    const tx = await updateV1(umi, {
    mint: mintAddress.publicKey,
    authority: authority,

    data: { ...newMetadata  }, // ...initialMetadata.data
    }).sendAndConfirm(umi)

    console.log("Updated Metadata: ", tx)
} catch (error) {
    console.log("Oops.. Something went wrong with updating the metadata", error);
  }
}