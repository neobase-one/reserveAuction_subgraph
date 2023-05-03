import {
  AuctionBidAuctionStruct as AuctionListingETH,
  AuctionBid as AuctionBidEvent,
  AuctionCanceled as AuctionCanceledEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionEnded as AuctionEndedEvent,
  AuctionReservePriceUpdated as AuctionReservePriceUpdatedEvent
} from "../generated/ReserveAuctionListingEth/ReserveAuctionListingEth"
import {
  AuctionBid,
  AuctionEvent,
  Auction
} from "../generated/schema"
import { fetchAuctionBid, fetchAuctionEvent, fetchAuctionListingETH } from "./utils/reserve-auction.utils"

export function handleAuctionBid(event: AuctionBidEvent): void {
  let entity = fetchAuctionListingETH(true, "LISTING_ETH", event.params.tokenContract, event.params.tokenId, changetype<AuctionListingETH>(event.params.auction))
  entity.save()
  let ev = fetchAuctionEvent( "AUCTION_BID", entity.id, event.block.number, event.block.timestamp, event.transaction.hash, event.logIndex);
  ev.save();
  let bid_ev = fetchAuctionBid( event.params.firstBid, event.params.extended, entity.id, event.block.number, event.block.timestamp, event.transaction.hash, event.logIndex);
  bid_ev.save()
  entity.save()
}

export function handleAuctionCanceled(event: AuctionCanceledEvent): void {
  let entity = fetchAuctionListingETH(false, "LISTING_ETH", event.params.tokenContract, event.params.tokenId, changetype<AuctionListingETH>(event.params.auction))
  entity.save()
  let ev = fetchAuctionEvent("AUCTION_CANCELED", entity.id, event.block.number, event.block.timestamp, event.transaction.hash, event.logIndex);
  ev.save()
  entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = fetchAuctionListingETH(true, "LISTING_ETH", event.params.tokenContract, event.params.tokenId, changetype<AuctionListingETH>(event.params.auction))
  entity.save()
  let ev = fetchAuctionEvent( "AUCTION_CREATED", entity.id, event.block.number, event.block.timestamp, event.transaction.hash, event.logIndex);
  ev.save()
  entity.save()
}

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let entity = fetchAuctionListingETH(false, "LISTING_ETH", event.params.tokenContract, event.params.tokenId, changetype<AuctionListingETH>(event.params.auction))
  entity.save()
  let ev = fetchAuctionEvent("AUCTION_ENDED", entity.id, event.block.number, event.block.timestamp, event.transaction.hash, event.logIndex);
  ev.save()
  entity.save()
}

export function handleAuctionReservePriceUpdated(
  event: AuctionReservePriceUpdatedEvent
): void {
  let entity = fetchAuctionListingETH(true, "LISTING_ETH", event.params.tokenContract, event.params.tokenId, changetype<AuctionListingETH>(event.params.auction))
  entity.save()
  let ev = fetchAuctionEvent( "AUCTION_RESERVE_PRICE_UPDATED", entity.id, event.block.number, event.block.timestamp, event.transaction.hash, event.logIndex);
  ev.save()
  entity.save()
}
