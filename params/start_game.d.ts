import { PacketData, PacketParams, PUInt, PVarInt, PVec2, PVec3, PVec3I, PZigZag32 } from "..";
type StartGameParams = PacketParams & {
	entity_id: PZigZag32,
	runtime_entity_id: PVarInt,
	player_gamemode: PUInt,
	player_position: PVec3,
	rotation: PVec2,
	seed: number,
	biome_type: number,
	biome_name: string,
	dimension: PZigZag32,
	generator: PZigZag32,
	world_gamemode: number,
	difficulty: PZigZag32,
	spawn_position: PVec3I,
	achievements_disabled: boolean,
	editor_world: boolean,
	day_cycle_stop_time: PZigZag32
	edu_offer: PZigZag32
	edu_features_enabled: boolean
	edu_product_uuid: string
	rain_level: number
	lightning_level: number
	has_confirmed_platform_locked_content: boolean
	is_multiplayer: boolean
	broadcast_to_lan: boolean
	xbox_live_broadcast_mode: PVarInt
	platform_broadcast_mode: PVarInt
	enable_commands: boolean
	is_texturepacks_required: boolean
	gamerules: any
	experiments: any
	experiments_previously_used: boolean
	bonus_chest: boolean
	map_enabled: boolean
	permission_level: any
	server_chunk_tick_range: number
	has_locked_behavior_pack: boolean
	has_locked_resource_pack: boolean
	is_from_locked_world_template: boolean
	msa_gamertags_only: boolean
	is_from_world_template: boolean
	is_world_template_option_locked: boolean
	only_spawn_v1_villagers: boolean
	persona_disabled: boolean
	custom_skins_disabled: boolean
	emote_chat_muted: boolean
	game_version: string
	limited_world_width: number
	limited_world_length: number
	is_new_nether: boolean
	edu_resource_uri: string
	experimental_gameplay_override: boolean
	chat_restriction_level: number
	disable_player_interactions: boolean
	level_id: string
	world_name: string
	premium_world_template_id: string
	is_trial: boolean
	movement_authority: PZigZag32
	rewind_history_size: PZigZag32
	server_authoritative_block_breaking: boolean
	current_tick: number
	enchantment_seed: PZigZag32
	block_properties: any
	itemstates: any
	multiplayer_correlation_id: string
	server_authoritative_inventory: boolean
	engine: string
	property_data: object
	block_pallette_checksum: number
	world_template_id: string
	client_side_generation: boolean
}

type StartGameData = PacketData & {
	name: 'start_game',
	params: StartGameParams
}

type StartGamePacket = Packet & {
	data: StartGameData
}
