import { PUInt, PZigZag32 } from "."

export type Item = {
	count: PUInt
	metadata: PVarInt
	has_stack_id: number,
	stack_id: void | undefined | PZigZag32
	block_runtime_id: PZigZag32
	extra: {
		// with blocking tick when item is shield
		// encapsulated
		lengthType: PVarInt
		type: any // ItemExtraData(With/Without)BlockingTick
	}
}

export type NetworkItem = {
	network_id: PZigZag32
	type: void | undefined | Item // has item network_id > 0
}
