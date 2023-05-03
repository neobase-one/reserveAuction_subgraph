import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Auction, AuctionBid, AuctionEvent } from "../../generated/schema";
import {  AuctionBidAuctionStruct as AuctionCoreERC20 } from "../../generated/ReserveAuctionCoreErc20/ReserveAuctionCoreErc20";
import { AuctionBidAuctionStruct as AuctionCoreETH } from "../../generated/ReserveAuctionCoreEth/ReserveAuctionCoreEth";
import { AuctionBidAuctionStruct as AuctionFinderERC20 } from "../../generated/ReserveAuctionFindersErc20/ReserveAuctionFindersErc20";
import { AuctionBidAuctionStruct as AuctionFinderETH } from "../../generated/ReserveAuctionFindersEth/ReserveAuctionFindersEth";
import { AuctionBidAuctionStruct as AuctionListingERC20 } from "../../generated/ReserveAuctionListingErc20/ReserveAuctionListingErc20";
import { AuctionBidAuctionStruct as AuctionListingETH } from "../../generated/ReserveAuctionListingEth/ReserveAuctionListingEth";

// type AuctionStruct =
//   | AuctionBidAuctionStruct
//   | AuctionCreatedAuctionStruct
//   | AuctionCanceledAuctionStruct
//   | AuctionEndedAuctionStruct
//   | AuctionReservePriceUpdatedAuctionStruct;

// export class AuctionStruct {
//   seller: Address;
//   sellerFundsRecipient: Address;
//   reservePrice: BigInt;
//   highestBid: BigInt;
//   highestBidder: Address;
//   duration: BigInt;
//   startTime: BigInt;
//   currency: Address;
//   firstBidTime: BigInt;
// }

export function fetchAuctionCoreERC20(
  live: boolean,
  auctionType: string,
  tokenContract: Address,
  tokenId: BigInt,
  auction : AuctionCoreERC20
): Auction {
  let entity = Auction.load(
    auctionType +
      "-" +
      tokenContract.toHex() +
      "-" +
      tokenId.toString() +
      "-" +
      auction.seller.toHex()
  );

  if (entity == null) {
    entity = new Auction(
      auctionType +
        "-" +
        tokenContract.toHex() +
        "-" +
        tokenId.toString() +
        "-" +
        auction.seller.toHex()
    );
  }
  entity.tokenContract = tokenContract;
  entity.tokenId = tokenId;
  entity.auction_live = live;
  entity.auction_type = auctionType;
  entity.auction_seller = auction.seller;
  entity.auction_sellerFundsRecipient = auction.sellerFundsRecipient;
  entity.auction_reservePrice = auction.reservePrice;
  entity.auction_highestBid = auction.highestBid;
  entity.auction_highestBidder = auction.highestBidder;
  entity.auction_duration = auction.duration;
  entity.auction_startTime = auction.startTime;
  entity.auction_firstBidTime = auction.firstBidTime;

  entity.auction_currency = auction.currency ? auction.currency : Address.zero();
  if(auctionType === "FINDER_ETH" || auctionType === "FINDER_ERC20"){
    entity.auction_FeeBps = 0;
    entity.auction_FeeRecipient = Address.zero();
  }
  else if(auctionType === "LISTING_ETH" || auctionType === "LISTING_ERC20"){
    entity.auction_FeeBps = 0;
    entity.auction_FeeRecipient = Address.zero();
  }
  else{
    entity.auction_FeeBps = 0;
    entity.auction_FeeRecipient = Address.zero();
  }
  return entity as Auction   

}

export function fetchAuctionCoreETH(
  live: boolean,
  auctionType: string,
  tokenContract: Address,
  tokenId: BigInt,
  auction : AuctionCoreETH
): Auction {
  let entity = Auction.load(
    auctionType +
      "-" +
      tokenContract.toHex() +
      "-" +
      tokenId.toString() +
      "-" +
      auction.seller.toHex()
  );

  if (entity == null) {
    entity = new Auction(
      auctionType +
        "-" +
        tokenContract.toHex() +
        "-" +
        tokenId.toString() +
        "-" +
        auction.seller.toHex()
    );
  }
  entity.tokenContract = tokenContract;
  entity.tokenId = tokenId;
  entity.auction_live = live;
  entity.auction_type = auctionType;
  entity.auction_seller = auction.seller;
  entity.auction_sellerFundsRecipient = auction.sellerFundsRecipient;
  entity.auction_reservePrice = auction.reservePrice;
  entity.auction_highestBid = auction.highestBid;
  entity.auction_highestBidder = auction.highestBidder;
  entity.auction_duration = auction.duration;
  entity.auction_startTime = auction.startTime;
  entity.auction_firstBidTime = auction.firstBidTime;
  entity.auction_currency = Address.zero();
  entity.auction_FeeBps = 0;
  entity.auction_FeeRecipient = Address.zero();  
  return entity as Auction   
}

export function fetchAuctionFinderERC20(
  live: boolean,
  auctionType: string,
  tokenContract: Address,
  tokenId: BigInt,
  auction : AuctionFinderERC20
): Auction {
  let entity = Auction.load(
    auctionType +
      "-" +
      tokenContract.toHex() +
      "-" +
      tokenId.toString() +
      "-" +
      auction.seller.toHex()
  );

  if (entity == null) {
    entity = new Auction(
      auctionType +
        "-" +
        tokenContract.toHex() +
        "-" +
        tokenId.toString() +
        "-" +
        auction.seller.toHex()
    );
  }
  entity.tokenContract = tokenContract;
  entity.tokenId = tokenId;
  entity.auction_live = live;
  entity.auction_type = auctionType;
  entity.auction_seller = auction.seller;
  entity.auction_sellerFundsRecipient = auction.sellerFundsRecipient;
  entity.auction_reservePrice = auction.reservePrice;
  entity.auction_highestBid = auction.highestBid;
  entity.auction_highestBidder = auction.highestBidder;
  entity.auction_duration = auction.duration;
  entity.auction_startTime = auction.startTime;
  entity.auction_firstBidTime = auction.firstBidTime;
  entity.auction_currency = auction.currency;
  entity.auction_FeeBps = auction.findersFeeBps;
  entity.auction_FeeRecipient = auction.finder;
  return entity as Auction   
}

export function fetchAuctionFinderETH(
  live: boolean,
  auctionType: string,
  tokenContract: Address,
  tokenId: BigInt,
  auction : AuctionFinderETH
): Auction {
  let entity = Auction.load(
    auctionType +
      "-" +
      tokenContract.toHex() +
      "-" +
      tokenId.toString() +
      "-" +
      auction.seller.toHex()
  );

  if (entity == null) {
    entity = new Auction(
      auctionType +
        "-" +
        tokenContract.toHex() +
        "-" +
        tokenId.toString() +
        "-" +
        auction.seller.toHex()
    );
  }
  entity.tokenContract = tokenContract;
  entity.tokenId = tokenId;
  entity.auction_live = live;
  entity.auction_type = auctionType;
  entity.auction_seller = auction.seller;
  entity.auction_sellerFundsRecipient = auction.sellerFundsRecipient;
  entity.auction_reservePrice = auction.reservePrice;
  entity.auction_highestBid = auction.highestBid;
  entity.auction_highestBidder = auction.highestBidder;
  entity.auction_duration = auction.duration;
  entity.auction_startTime = auction.startTime;
  entity.auction_firstBidTime = auction.firstBidTime;
  entity.auction_currency = Address.zero();
  entity.auction_FeeBps = auction.findersFeeBps;
  entity.auction_FeeRecipient = auction.finder; 
  return entity as Auction
}

export function fetchAuctionListingERC20(
  live: boolean,
  auctionType: string,
  tokenContract: Address,
  tokenId: BigInt,
  auction : AuctionListingERC20
): Auction {
  let entity = Auction.load(
    auctionType +
      "-" +
      tokenContract.toHex() +
      "-" +
      tokenId.toString() +
      "-" +
      auction.seller.toHex()
  );

  if (entity == null) {
    entity = new Auction(
      auctionType +
        "-" +
        tokenContract.toHex() +
        "-" +
        tokenId.toString() +
        "-" +
        auction.seller.toHex()
    );
  }
  entity.tokenContract = tokenContract;
  entity.tokenId = tokenId;
  entity.auction_live = live;
  entity.auction_type = auctionType;
  entity.auction_seller = auction.seller;
  entity.auction_sellerFundsRecipient = auction.sellerFundsRecipient;
  entity.auction_reservePrice = auction.reservePrice;
  entity.auction_highestBid = auction.highestBid;
  entity.auction_highestBidder = auction.highestBidder;
  entity.auction_duration = auction.duration;
  entity.auction_startTime = auction.startTime;
  entity.auction_firstBidTime = auction.firstBidTime;
  entity.auction_currency = auction.currency;
  entity.auction_FeeBps = auction.listingFeeBps
  entity.auction_FeeRecipient = auction.listingFeeRecipient
  return entity as Auction   
}

export function fetchAuctionListingETH(
  live: boolean,
  auctionType: string,
  tokenContract: Address,
  tokenId: BigInt,
  auction : AuctionListingETH
): Auction {
  let entity = Auction.load(
    auctionType +
      "-" +
      tokenContract.toHex() +
      "-" +
      tokenId.toString() +
      "-" +
      auction.seller.toHex()
  );

  if (entity == null) {
    entity = new Auction(
      auctionType +
        "-" +
        tokenContract.toHex() +
        "-" +
        tokenId.toString() +
        "-" +
        auction.seller.toHex()
    );
  }
  entity.tokenContract = tokenContract;
  entity.tokenId = tokenId;
  entity.auction_live = live;
  entity.auction_type = auctionType;
  entity.auction_seller = auction.seller;
  entity.auction_sellerFundsRecipient = auction.sellerFundsRecipient;
  entity.auction_reservePrice = auction.reservePrice;
  entity.auction_highestBid = auction.highestBid;
  entity.auction_highestBidder = auction.highestBidder;
  entity.auction_duration = auction.duration;
  entity.auction_startTime = auction.startTime;
  entity.auction_firstBidTime = auction.firstBidTime;
  entity.auction_currency = Address.zero();
  entity.auction_FeeBps = auction.listingFeeBps
  entity.auction_FeeRecipient = auction.listingFeeRecipient
  return entity as Auction
}

export function fetchAuctionEvent(
  eventType: string,
  id: string,
  blockNumber: BigInt,
  timestamp: BigInt,
  txhash: Bytes,
  logIndex: BigInt
): AuctionEvent {
  let ev = new AuctionEvent(
    blockNumber
      .toString()
      .concat("-")
      .concat(logIndex.toString())
  );
  ev.eventType = eventType;
  ev.auction = id;
  ev.blockNumber = blockNumber;
  ev.blockTimestamp = timestamp;
  ev.transactionHash = txhash;
  return ev as AuctionEvent;
}
export function fetchAuctionBid(
  firstBid: boolean,
  extendedBid: boolean,
  id: string,
  blockNumber: BigInt,
  timestamp: BigInt,
  txhash: Bytes,
  logIndex: BigInt
): AuctionBid {
  let bid_ev = new AuctionBid(
    blockNumber
      .toString()
      .concat("-")
      .concat(logIndex.toString())
  );
  bid_ev.first_bid = firstBid;
  bid_ev.extended_bid = extendedBid;
  bid_ev.auction = id;
  bid_ev.blockNumber = blockNumber;
  bid_ev.blockTimestamp = timestamp;
  bid_ev.transactionHash = txhash;
  return bid_ev as AuctionBid;
}
