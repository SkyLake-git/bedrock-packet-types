import { PacketData, PacketParams, PVarInt, PVec3, Packet } from "..";

type MovementMode = 'normal' | 'reset' | 'teleport' | 'rotation'

type TeleportCause = 'unknown' | 'projectile' | 'chorus_fruit' | 'command' | 'behavior'

type MovementTeleport = {
	cause: TeleportCause,
	source_entity_type: number // legacy entity ids
}

type MovePlayerParams = PacketParams & {
	runtime_id: PVarInt,
	position: PVec3,
	pitch: number,
	head_yaw: number,
	mode: MovementMode | number,
	on_ground: boolean,
	ridden_runtime_id: PVarInt,
	teleport: MovementTeleport | void | undefined,
	tick: PVarInt
}


type MovePlayerData = PacketData & {
	name: "move_player",
	params: MovePlayerParams
}

type MovePlayerPacket = Packet & {
	data: MovePlayerData
}
