import { Packet, PacketData, PacketParams, PVarInt, PVec3, PZigZag32 } from '..'
import { NetworkItem } from '../network_types'
import { TransactionLegacy } from './player_auth_input'

export type TransactionSourceType = 'container' | 'global' | 'world_interaction' | 'creative' | 'craft_slot' | 'craft'
export type TransactionType = 'normal' | 'inventory_mismatch' | 'item_use' | 'item_use_on_entity' | 'item_release'
export type TransactionUseItemType = 'click_block' | 'click_air' | 'break_block'
export type TransactionUseItemOnEntityType = 'interact' | 'attack'
export type TransactionReleaseItemType = 'release' | 'consume'

export type TransactionActionType = {
	source_type: PVarInt | TransactionSourceType
	type: {
		inventory_id: PVarInt // container
		action: PVarInt // craft or craft_slot
		flags: PVarInt // world_interaction
	} | void | undefined
	slot: PVarInt
	old_item: NetworkItem
	new_item: NetworkItem
}

export type TransactionActions = {
	countType: PVarInt
	type: TransactionActionType
}

export type TransactionUseItem = {
	action_type: PVarInt | TransactionUseItemType
}

export type TransactionUseItemOnEntity = {
	entity_runtime_id: PVarInt
	action_type: TransactionUseItemOnEntityType
	hotbar_slot: PZigZag32
	held_item: NetworkItem
	player_pos: PVec3
	click_pos: PVec3
}

export type TransactionReleaseItem = {
	action_type: TransactionReleaseItemType
	hotbar_slot: PZigZag32
	held_item: NetworkItem
	head_pos: PVec3
}

export type Transaction = {
	legacy: TransactionLegacy
	transaction_type: TransactionType
	actions: TransactionActions
	transaction_data: void | undefined |
	TransactionUseItem | TransactionUseItemOnEntity | TransactionReleaseItem
}


export type InventoryTransactionParams = PacketParams & {
	transaction: Transaction
}

export type InventoryTransactionData = PacketData & {
	name: 'inventory_transaction'
	params: InventoryTransactionParams
}

export type InventoryTransactionPacket = Packet & {
	data: InventoryTransactionData
}
