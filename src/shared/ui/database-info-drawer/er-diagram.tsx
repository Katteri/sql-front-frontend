import { Background, BackgroundVariant, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { ERDiagramType } from "@/shared/types/er-diagram-types";

import { DatabaseSchema } from "./database-schema";

const nodeTypes = { databaseSchema: DatabaseSchema };

export const ERDiagram = ({
  databaseNodes,
  databaseEdges,
}: ERDiagramType) => {
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
      <Controls showInteractive={false} />
    </ReactFlow>
  );
};
