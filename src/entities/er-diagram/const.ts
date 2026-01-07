import type { Edge, Node } from "@xyflow/react";

export const databaseNodes: Node[] = [
  {
    id: "soldier",
    position: { x: -200, y: 200 },
    type: "databaseSchema",
    data: {
      label: "soldier",
      description: "сведения о военнослужащих",
      columns: [
        { title: "id", type: "bigint" },
        { title: "full_name", type: "varchar" },
        { title: "birth_year", type: "integer" },
        { title: "gender", type: "varchar" },
        { title: "rank", type: "varchar" },
        { title: "branch", type: "varchar" },
        { title: "enlistment_city", type: "varchar" },
        { title: "enlistment_date", type: "date" },
        { title: "status", type: "varchar" },
      ],
    },
  },
  {
    id: "soldier_medal",
    position: { x: -450, y: 200 },
    type: "databaseSchema",
    data: {
      label: "soldier_medal",
      description: "награждение солдат",
      columns: [
        { title: "award_date", type: "date" },
        { title: "soldier_id", type: "bigint" },
        { title: "medal_id", type: "bigint" },
      ],
    },
  },
  {
    id: "medal",
    position: { x: -700, y: 200 },
    type: "databaseSchema",
    data: {
      label: "medal",
      description: "награды",
      columns: [
        { title: "id", type: "bigint" },
        { title: "medal_name", type: "varchar" },
        { title: "establishment_date", type: "date" },
        { title: "award_criteria", type: "text" },
      ],
    },
  },
  {
    id: "military_service",
    position: { x: 150, y: -100 },
    type: "databaseSchema",
    data: {
      label: "military_service",
      description: "служба солдат в подразделениях",
      columns: [
        { title: "id", type: "bigint" },
        { title: "soldier_id", type: "bigint" },
        { title: "unit_id", type: "bigint" },
        { title: "start_date", type: "date" },
        { title: "end_date", type: "date" },
      ],
    },
  },
  {
    id: "military_unit",
    position: { x: 500, y: 100 },
    type: "databaseSchema",
    data: {
      label: "military_unit",
      description: "военные подразделения",
      columns: [
        { title: "id", type: "bigint" },
        { title: "unit_name", type: "varchar" },
        { title: "unit_type", type: "varchar" },
        { title: "location", type: "varchar" },
        { title: "formation_date", type: "date" },
        { title: "combat_efficiency", type: "numeric" },
      ],
    },
  },
  {
    id: "equipment",
    position: { x: 150, y: 200 },
    type: "databaseSchema",
    data: {
      label: "equipment",
      description: "военное снаряжение",
      columns: [
        { title: "id", type: "bigint" },
        { title: "unit_id", type: "bigint" },
        { title: "equipment_type", type: "varchar" },
        { title: "item_name", type: "varchar" },
        { title: "quantity", type: "integer" },
        { title: "last_replenishment", type: "date" },
      ],
    },
  },
  {
    id: "equipment_assignment",
    position: { x: 500, y: 400 },
    type: "databaseSchema",
    data: {
      label: "equipment_assignment",
      description: "выдача оборудования солдатам",
      columns: [
        { title: "id", type: "bigint" },
        { title: "soldier_id", type: "bigint" },
        { title: "equipment_id", type: "bigint" },
        { title: "issue_date", type: "date" },
        { title: "quantity", type: "integer" },
      ],
    },
  },
  {
    id: "battle",
    position: { x: -700, y: 600 },
    type: "databaseSchema",
    data: {
      label: "battle",
      description: "бои и сражения",
      columns: [
        { title: "id", type: "bigint" },
        { title: "battle_name", type: "varchar" },
        { title: "start_date", type: "date" },
        { title: "end_date", type: "date" },
        { title: "location", type: "varchar" },
        { title: "result", type: "varchar" },
        { title: "quantity", type: "integer" },
        { title: "importance_level", type: "varchar" },
      ],
    },
  },
  {
    id: "battle_enemy_unit",
    position: { x: -425, y: 700 },
    type: "databaseSchema",
    data: {
      label: "battle_enemy_unit",
      description: "выдача оборудования солдатам",
      columns: [
        { title: "battle_id", type: "bigint" },
        { title: "enemy_unit_id", type: "bigint" },
      ],
    },
  },
  {
    id: "enemy_unit",
    position: { x: -100, y: 650 },
    type: "databaseSchema",
    data: {
      label: "enemy_unit",
      description: "бои и сражения",
      columns: [
        { title: "id", type: "bigint" },
        { title: "unit_name", type: "varchar" },
        { title: "unit_type", type: "varchar" },
        { title: "commander", type: "varchar" },
        { title: "formation_date", type: "date" },
        { title: "destruction_date", type: "date" },
      ],
    },
  },
];

export const databaseEdges: Edge[] = [
  {
    id: "soldier-soldier_medal",
    source: "soldier_medal",
    target: "soldier",
    sourceHandle: "source:soldier_id",
    targetHandle: "target:id",
  },
  {
    id: "soldier_medal-medal",
    source: "medal",
    target: "soldier_medal",
    sourceHandle: "source:id",
    targetHandle: "target:medal_id",
  },
  {
    id: "soldier-military_service",
    source: "soldier",
    target: "military_service",
    sourceHandle: "source:id",
    targetHandle: "target:soldier_id",
  },
  {
    id: "military_service-military_unit",
    source: "military_service",
    target: "military_unit",
    sourceHandle: "source:unit_id",
    targetHandle: "target:id",
  },
  {
    id: "equipment-military_unit",
    source: "equipment",
    target: "military_unit",
    sourceHandle: "source:unit_id",
    targetHandle: "target:id",
  },
  {
    id: "equipment-equipment_assignment",
    source: "equipment",
    target: "equipment_assignment",
    sourceHandle: "source:id",
    targetHandle: "target:equipment_id",
  },
  {
    id: "soldier-equipment_assignment",
    source: "soldier",
    target: "equipment_assignment",
    sourceHandle: "source:id",
    targetHandle: "target:soldier_id",
  },
  {
    id: "battle-battle_enemy_unit",
    source: "battle",
    target: "battle_enemy_unit",
    sourceHandle: "source:id",
    targetHandle: "target:battle_id",
  },
  {
    id: "battle_enemy_unit-enemy_unit",
    source: "battle_enemy_unit",
    target: "enemy_unit",
    sourceHandle: "source:enemy_unit_id",
    targetHandle: "target:id",
  },
];
