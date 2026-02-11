import type { Edge, Node } from "@xyflow/react";

export type QuestNodesType = {
  id: string;
  line: string; //TODO: is that nessesary?
  legend: string;
  task: string;
  clue?: string;
}[];

export type DatabaseQuestSchemasType = {
  id: string;
  databaseNodes: Node[];
  databaseEdges?: Edge[];
}[];

export const questNodes: QuestNodesType = [
  {
    id: "start",
    line: "1",
    legend: "Ваш партизанский отряд расположился в небольшой комнатушке с низкими сводчатыми потолками и столом посреди комнаты, над которым висит единственная тускло освещающая комнату лампа.  Все склонились над столом, на котором разложена порядком помятая карта города, которую чудом удалось добыть вашему отряду с поверхности оккупированного немцами города. На ней отмечены ключевые объекты города.",
    task: "Выберите из базы данных map, все объекты в городе которые имеют статус военный.",
    clue: "Верните id, name, description, coordinates.",
  },
  {
    id: "high-importance",
    line: "1",
    legend: "Далее вам необходимо выбрать места, в которых будет наиболее эффективно устроить диверсию. На обратной стороне карты написана категория важности отмеченных на карте мест (от 1-го до 50-ти), чем она выше, тем более это место необходимо для немецкой армии.",
    task: "Выведите из таблицы is_sensitive и map в порядке убывания топ 5 мест с наивысшей степенью важности вместе с их координатами, названием и описанием.",
    clue: "Из таблиц is_sensitive и map получите топ-5 записей с максимальной importance, отсортированные по убыванию значения. Верните map.id, map.name, map.description, map.coordinates, is_sensitive.importance."
  },
  {
    id: "brindge-and-factory",
    line: "1",
    legend: "Две наиболее подходящих варианта для диверсии — это железнодорожный мост через реку, по которому немцы отправляют танки на фронт грузовыми поездами, и огромный завод по производству новейших танков Тигр. Вашему отряду нужно определиться, где вы устроите диверсию, так как охватить сразу 2 места, вам не хватит ни сил, ни времени, ни человеческих ресурсов.",
    task: "В добытых картах также есть рваный лист с подробным описанием самых критичных военных объектов(отдельная 3-я база данных со структурой id критичного объекта и его подробное описание), выведите описание для танкового завода и жд моста.",
    clue: "Из таблицы critical_objects (связана с map по полю id) получите сведения о Танковом заводе и ЖД-мосте. Выведите map.id, map.name, critical_objects.description."
  },
  {
    id: "decision",
    line: "1",
    legend: "В вашем отряде всего 3 человека, вы — Гриша (15-ти летний подросток среднего роста, но крепкого телосложения), Саша (красивая девушка 18-ти лет также участвующая в партизанском освободительном движении) и опытный руководитель вашего партизанского отряда “Надежда” дядя Семен (взрослый мужчина лет 40 с отпечатком пережитых трудных событий на морщинистом лице). Вам надо решить, куда направить свои силы: Вы предлагаете разобраться в первую очередь непосредственно с самим танковым заводом, как с первоисточником вражеской техники. Саша же предлагает более простой и безопасный вариант, уничтожить железнодорожный мост вместе с идущим по нему поездом загруженным под завязку новой партией танков. Последнее слово остается за главным — Семеном. Ему нужно сделать выбор, определяющий успешность вашей вылазки.",
    task: "Напишите запрос, меняющий значение поля result в таблице decision на 1 если вы хотите разобраться с танковым заводом, или на 2 если предпочитаете реализовать менее рисковый и быстрый вариант — уничтожить танковый мост (в таблице decision есть только одно поле result со значением по умолчанию 0).",
  },
  {
    id: "tank-fabric",
    line: "1-1",
    legend: "Вы решаете заняться танковым заводом. В глубокой ночи, вы несколько часов перебираете все возможные способы как можно было бы его уничтожить, и совместными усилиями приходите к 2-м вариантам наиболее подходящим способам, 1) вы можете связаться по шифрованной радиосвязи со штабом советской армии, сообщить координаты завода и ориентиры и послать на завод группу советских бомбардировщиков, которая в случае успеха, обеспечит полное уничтожение завода 2) также вы можете раздобыть взрывчатку и самостоятельно силами вашего отряда подорвать завод. Вам необходимо принять финальное решение о способе проведения данной операции.",
    task: "Напишите запрос, меняющий значение поля result в таблице decision_factory на 10 если хотите прибегнуть к 1-му способу, и 20 если хотите воспользоваться 2-м.",
  }
];

export const databaseQuestSchemas: DatabaseQuestSchemasType = [
  {
    id: "start",
    databaseNodes: [
      {
        id: "map",
        position: { x: 0, y: 0 },
        type: "databaseSchema",
        data: {
          label: "map",
          description: "объекты города",
          columns: [
            { title: "id", type: "bigint" },
            { title: "name", type: "varchar" },
            { title: "description", type: "varchar" },
            { title: "coordinates", type: "varchar" },
            { title: "status", type: "varchar" },
          ],
        },
      },
    ],
  },

  {
    id: "high-importance",
    databaseNodes: [
      {
        id: "map",
        position: { x: 0, y: 0 },
        type: "databaseSchema",
        data: {
          label: "map",
          description: "объекты города",
          columns: [
            { title: "id", type: "bigint" },
            { title: "name", type: "varchar" },
            { title: "description", type: "varchar" },
            { title: "coordinates", type: "varchar" },
            { title: "status", type: "varchar" },
          ],
        },
      },
      {
        id: "is_sensitive",
        position: { x: 100, y: 0 },
        type: "databaseSchema",
        data: {
          label: "is_sensitive",
          description: "важность объекта",
          columns: [
            { title: "id", type: "bigint" },
            { title: "importance", type: "integer" },
          ],
        },
      },
    ],
    databaseEdges: [
      {
        id: "map-is_sensitive",
        source: "map",
        target: "is_sensitive",
        sourceHandle: "source:id",
        targetHandle: "target:id",
      },
    ],
  },

  {
    id: "brindge-and-factory",
    databaseNodes: [
      {
        id: "map",
        position: { x: 0, y: 0 },
        type: "databaseSchema",
        data: {
          label: "map",
          description: "объекты города",
          columns: [
            { title: "id", type: "bigint" },
            { title: "name", type: "varchar" },
            { title: "description", type: "varchar" },
            { title: "coordinates", type: "varchar" },
            { title: "status", type: "varchar" },
          ],
        },
      },
      {
        id: "is_sensitive",
        position: { x: 100, y: 0 },
        type: "databaseSchema",
        data: {
          label: "is_sensitive",
          description: "важность объекта",
          columns: [
            { title: "id", type: "bigint" },
            { title: "importance", type: "integer" },
          ],
        },
      },
      {
        id: "critical_objects",
        position: { x: 200, y: 0 },
        type: "databaseSchema",
        data: {
          label: "critical_objects",
          description: "важность объекта",
          columns: [
            { title: "id", type: "bigint" },
            { title: "description", type: "varchar" },
          ],
        },
      },
    ],
    databaseEdges: [
      {
        id: "map-is_sensitive",
        source: "map",
        target: "is_sensitive",
        sourceHandle: "source:id",
        targetHandle: "target:id",
      },
      {
        id: "map-critical_objects",
        source: "map",
        target: "critical_objects",
        sourceHandle: "source:id",
        targetHandle: "target:id",
      },
    ],
  },

  {
    id: "decision",
    databaseNodes: [
      {
        id: "decision",
        position: { x: 300, y: 0 },
        type: "databaseSchema",
        data: {
          label: "decision",
          description: "ваш выбор",
          columns: [
            { title: "result", type: "integer" },
          ],
        },
      }
    ],
  },

  {
    id: "tank-fabric",
    databaseNodes: [
      {
        id: "decision",
        position: { x: 300, y: 0 },
        type: "databaseSchema",
        data: {
          label: "decision_factory",
          description: "ваш выбор",
          columns: [
            { title: "result", type: "integer" },
          ],
        },
      }
    ],
  },

];
