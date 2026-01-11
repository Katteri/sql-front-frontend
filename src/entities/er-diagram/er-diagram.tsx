import { Background, BackgroundVariant, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { databaseEdges, databaseNodes } from "./const";

import { DatabaseSchema } from "./database-schema";

const nodeTypes = { databaseSchema: DatabaseSchema };

export const ERDiagram = () => {

  return (
    <ReactFlow
      nodes={databaseNodes}
      edges={databaseEdges}
      nodeTypes={nodeTypes}
      proOptions={{ hideAttribution: true }}
      fitView
      fitViewOptions={{ padding: 0.4 }}
    >
      <Background variant={BackgroundVariant.Dots}/>
      <Controls />
    </ReactFlow>
  );
};
