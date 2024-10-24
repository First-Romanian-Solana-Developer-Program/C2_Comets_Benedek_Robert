import {Metaplex, toMetaplexFile} from '@metaplex-foundation/js';

import fs from "fs"

export async function uploadMetadata( metaplex: Metaplex, data:any) {


   const  buffer = fs.readFileSync(data.imgPath); 

    const metadata = {
        name: "My NFT",
        symbol: "NFT",
        uri: "https://arweave.net/abc123",
        seller_fee_basis_points: 500,
        creators: []
    }
    
    const files = [toMetaplexFile("image.png", fs.readFileSync("image.png"))]
    
    const result = await Metaplex.uploadMetadata(metadata, files)
    
    console.log(result)
    }