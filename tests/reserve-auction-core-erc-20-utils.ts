import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AuctionBid,
  AuctionCanceled,
  AuctionCreated,
  AuctionEnded,
  AuctionReservePriceUpdated,
  RoyaltyPayout
} from "../generated/ReserveAuctionCoreErc20/ReserveAuctionCoreErc20"

export function createAuctionBidEvent(
  tokenContract: Address,
  tokenId: BigInt,
  firstBid: boolean,
  extended: boolean,
  auction: ethereum.Tuple
): AuctionBid {
  let auctionBidEvent = changetype<AuctionBid>(newMockEvent())

  auctionBidEvent.parameters = new Array()

  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam("firstBid", ethereum.Value.fromBoolean(firstBid))
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam("extended", ethereum.Value.fromBoolean(extended))
  )
  auctionBidEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return auctionBidEvent
}

export function createAuctionCanceledEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): AuctionCanceled {
  let auctionCanceledEvent = changetype<AuctionCanceled>(newMockEvent())

  auctionCanceledEvent.parameters = new Array()

  auctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  auctionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionCanceledEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return auctionCanceledEvent
}

export function createAuctionCreatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): AuctionCreated {
  let auctionCreatedEvent = changetype<AuctionCreated>(newMockEvent())

  auctionCreatedEvent.parameters = new Array()

  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return auctionCreatedEvent
}

export function createAuctionEndedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): AuctionEnded {
  let auctionEndedEvent = changetype<AuctionEnded>(newMockEvent())

  auctionEndedEvent.parameters = new Array()

  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return auctionEndedEvent
}

export function createAuctionReservePriceUpdatedEvent(
  tokenContract: Address,
  tokenId: BigInt,
  auction: ethereum.Tuple
): AuctionReservePriceUpdated {
  let auctionReservePriceUpdatedEvent = changetype<AuctionReservePriceUpdated>(
    newMockEvent()
  )

  auctionReservePriceUpdatedEvent.parameters = new Array()

  auctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  auctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionReservePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromTuple(auction))
  )

  return auctionReservePriceUpdatedEvent
}

export function createRoyaltyPayoutEvent(
  tokenContract: Address,
  tokenId: BigInt,
  recipient: Address,
  amount: BigInt
): RoyaltyPayout {
  let royaltyPayoutEvent = changetype<RoyaltyPayout>(newMockEvent())

  royaltyPayoutEvent.parameters = new Array()

  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  royaltyPayoutEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return royaltyPayoutEvent
}
