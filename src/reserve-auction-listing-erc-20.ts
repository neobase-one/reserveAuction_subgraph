import {
  AuctionBid as AuctionBidEvent,
  AuctionCanceled as AuctionCanceledEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionEnded as AuctionEndedEvent,
  AuctionReservePriceUpdated as AuctionReservePriceUpdatedEvent
} from "../generated/ReserveAuctionListingErc20/ReserveAuctionListingErc20"
import {
  AuctionBid,
  AuctionEvent,
  Auction
} from "../generated/schema"

export function handleAuctionBid(event: AuctionBidEvent): void {
  let entity = Auction.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())

  if (entity == null) {
    entity = new Auction(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())
  }
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_live = true
  entity.auction_type = "LISTING_ERC20"
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient = event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_FeeBps = event.params.auction.listingFeeBps
  entity.auction_FeeRecipient = event.params.auction.listingFeeRecipient
  entity.save()

  let ev = new AuctionEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "AUCTION_BID"
  ev.auction = entity.id
  ev.blockNumber = event.block.number
  ev.blockTimestamp = event.block.timestamp
  ev.transactionHash = event.transaction.hash
  ev.save()

  let bid_ev = new AuctionBid(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  bid_ev.first_bid = event.params.firstBid
  bid_ev.extended_bid = event.params.extended
  bid_ev.auction = entity.id
  bid_ev.blockNumber = event.block.number
  bid_ev.blockTimestamp = event.block.timestamp
  bid_ev.transactionHash = event.transaction.hash
  bid_ev.save()
  entity.save()
}

export function handleAuctionCanceled(event: AuctionCanceledEvent): void {
  let entity = Auction.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())

  if (entity == null) {
    entity = new Auction(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())
  }
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_live = false
  entity.auction_type = "LISTING_ERC20"
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient = event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_FeeBps = event.params.auction.listingFeeBps
  entity.auction_FeeRecipient = event.params.auction.listingFeeRecipient
  entity.save()

  let ev = new AuctionEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "AUCTION_CANCELED"
  ev.auction = entity.id
  ev.blockNumber = event.block.number
  ev.blockTimestamp = event.block.timestamp
  ev.transactionHash = event.transaction.hash
  ev.save()
  entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = Auction.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())

  if (entity == null) {
    entity = new Auction(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())
  }
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_live = true
  entity.auction_type = "LISTING_ERC20"
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient = event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_FeeBps = event.params.auction.listingFeeBps
  entity.auction_FeeRecipient = event.params.auction.listingFeeRecipient
  entity.save()

  let ev = new AuctionEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "AUCTION_CREATED"
  ev.auction = entity.id
  ev.blockNumber = event.block.number
  ev.blockTimestamp = event.block.timestamp
  ev.transactionHash = event.transaction.hash
  ev.save()
  entity.save()
}

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let entity = Auction.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())

  if (entity == null) {
    entity = new Auction(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())
  }
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_live = false
  entity.auction_type = "LISTING_ERC20"
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient = event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_FeeBps = event.params.auction.listingFeeBps
  entity.auction_FeeRecipient = event.params.auction.listingFeeRecipient
  entity.save()

  let ev = new AuctionEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "AUCTION_ENDED"
  ev.auction = entity.id
  ev.blockNumber = event.block.number
  ev.blockTimestamp = event.block.timestamp
  ev.transactionHash = event.transaction.hash
  ev.save()
  entity.save()
}

export function handleAuctionReservePriceUpdated(
  event: AuctionReservePriceUpdatedEvent
): void {
  let entity = Auction.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())

  if (entity == null) {
    entity = new Auction(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString() + "-" + event.params.auction.seller.toHex())
  }
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_live = true
  entity.auction_type = "LISTING_ERC20"
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient = event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_FeeBps = event.params.auction.listingFeeBps
  entity.auction_FeeRecipient = event.params.auction.listingFeeRecipient
  entity.save()

  let ev = new AuctionEvent(
    event.block.number.toString().concat('-').concat(event.logIndex.toString())
  )
  ev.eventType = "AUCTION_RESERVE_PRICE_UPDATED"
  ev.auction = entity.id
  ev.blockNumber = event.block.number
  ev.blockTimestamp = event.block.timestamp
  ev.transactionHash = event.transaction.hash
  ev.save()
  entity.save()
}
