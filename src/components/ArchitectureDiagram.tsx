'use client';

import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodeStyle = {
  background: '#161B22',
  color: '#E6EDF3',
  border: '1px solid #21262D',
  borderRadius: '4px',
  padding: '8px 16px',
  fontSize: '11px',
  fontFamily: 'JetBrains Mono, monospace',
};

const greenNodeStyle = {
  ...nodeStyle,
  border: '1px solid #00FF41',
  color: '#00FF41',
};

const nodes: Node[] = [
  {
    id: 'client',
    position: { x: 250, y: 0 },
    data: { label: 'Client App (React)' },
    style: greenNodeStyle,
  },
  {
    id: 'gateway',
    position: { x: 250, y: 80 },
    data: { label: 'API Gateway (NestJS)' },
    style: greenNodeStyle,
  },
  {
    id: 'foodpanda',
    position: { x: 50, y: 180 },
    data: { label: 'Foodpanda API' },
    style: nodeStyle,
  },
  {
    id: 'ubereats',
    position: { x: 450, y: 180 },
    data: { label: 'UberEats API' },
    style: nodeStyle,
  },
  {
    id: 'order-service',
    position: { x: 250, y: 180 },
    data: { label: 'Order Service' },
    style: nodeStyle,
  },
  {
    id: 'redis',
    position: { x: 100, y: 290 },
    data: { label: 'Redis (Cache)' },
    style: nodeStyle,
  },
  {
    id: 'mysql',
    position: { x: 250, y: 290 },
    data: { label: 'MySQL' },
    style: nodeStyle,
  },
  {
    id: 'qrcode',
    position: { x: 400, y: 290 },
    data: { label: 'QRCode Module' },
    style: nodeStyle,
  },
  {
    id: 'docker',
    position: { x: 250, y: 380 },
    data: { label: 'Docker / CI-CD' },
    style: { ...nodeStyle, border: '1px dashed #8B949E' },
  },
];

const edges: Edge[] = [
  { id: 'e1', source: 'client', target: 'gateway', animated: true, style: { stroke: '#00FF41' } },
  { id: 'e2', source: 'gateway', target: 'order-service', style: { stroke: '#21262D' } },
  { id: 'e3', source: 'gateway', target: 'foodpanda', style: { stroke: '#21262D' } },
  { id: 'e4', source: 'gateway', target: 'ubereats', style: { stroke: '#21262D' } },
  { id: 'e5', source: 'order-service', target: 'redis', style: { stroke: '#21262D' } },
  { id: 'e6', source: 'order-service', target: 'mysql', style: { stroke: '#21262D' } },
  { id: 'e7', source: 'order-service', target: 'qrcode', style: { stroke: '#21262D' } },
  { id: 'e8', source: 'mysql', target: 'docker', style: { stroke: '#21262D' }, animated: true },
];

export default function ArchitectureDiagram() {
  return (
    <div className="h-[450px] w-full bg-terminal-bg rounded border border-card-border">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
      >
        <Background color="#21262D" gap={20} />
        <Controls
          showInteractive={false}
          style={{
            background: '#161B22',
            border: '1px solid #21262D',
            borderRadius: '4px',
          }}
        />
      </ReactFlow>
    </div>
  );
}
