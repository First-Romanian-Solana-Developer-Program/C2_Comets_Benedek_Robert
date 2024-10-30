import "dotenv/config";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createSignerFromKeypair,
  publicKey,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

 import { clusterApiUrl, Connection } from "@solana/web3.js";
import { uploadNftImage } from "./upload_nftImage";
import { uploadNftMetadata } from "./upload_nft_metadata";
import { mintNft } from "./nft_mint";
import { updateMetadata } from "./update_metadata";
import { transferNft } from "./transfer_nft";
 
const user = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));
const umi = createUmi(connection);

let keypair = umi.eddsa.createKeypairFromSecretKey(user.secretKey);
const myKeypairSigner = createSignerFromKeypair(umi, keypair);

// Load up the necessary plugins
umi.use(signerIdentity(myKeypairSigner));
umi.use(mplTokenMetadata());
umi.use(irysUploader());

const NFT_DATA =  { 
    name: "SDP ALADIN nft" , 
    symbol: "ALADIN",
    description : "Fly, aladin, fly - Solana developers Program - RO web3 comets ",
    imgFilePath : "aladin.png" 
};
console.log("Loaded user:", user.publicKey.toBase58());

// main
(async () => {
  try {
    // 1. Upload image
    const imgUri = await uploadNftImage(umi, NFT_DATA.imgFilePath);

    // 2. Upload metadata
    const metadataUri = await uploadNftMetadata(umi, NFT_DATA, imgUri!);

    // 3. Mint NFT
    const mintAddress = await mintNft(umi, metadataUri!, NFT_DATA);

    if (!mintAddress) {
      console.log("Minting failed");
      return;
    }
    // 4. Update metadata
    const newMetadata = {...NFT_DATA , name: "ALADIN nft - updated"};
    await updateMetadata(umi, newMetadata, mintAddress, user);

    // 5. transfer
    await transferNft(umi, mintAddress, user);     

    
  } catch (error) {
    console.log(`Oops.. Something went wrong ${error}`);
  }
})();