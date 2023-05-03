import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Auction, AuctionBid, AuctionEvent } from "../../generated/schema";

// export function fetchAuction(
//   live: boolean,
//   auctionType: string,
//   tokenContract: Address,
//   tokenId: BigInt,
//   auction : 
// ): Auction {

// }
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
