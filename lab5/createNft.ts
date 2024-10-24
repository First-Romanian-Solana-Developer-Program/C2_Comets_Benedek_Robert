import { Metaplex } from "@metaplex-foundation/js";


export async function createNft( metaplex: Metaplex, uri : string, nftData: any) : Promise<void> {
    const {nft} = await metaplex.nfts().create({ uri:  uri, name: nftData.name, sellerFeeBasisPoints: 500, symbol:nftData.symbol  }, {commitment: 'finalized'});
    console.log(`✅ Created NFT: ${nft.address}`);
    console.log(`🌐 View on Solana Explorer: https://explorer.solana.com/address/${nft.address}`);
}
    