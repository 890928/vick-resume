'use client';

import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { ArchVariant } from '@/data/resume';

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

const dimEdge = { stroke: '#21262D' };
const hotEdge = { stroke: '#00FF41' };

/** 王品 QC 4.0：LIFF → 前端 → NestJS 後端 → 集團中台 → WPOS，訂單主路徑打光 */
const wowprimeNodes: Node[] = [
  { id: 'liff', position: { x: 250, y: 0 }, data: { label: 'Customer · LINE LIFF' }, style: greenNodeStyle },
  { id: 'fe', position: { x: 250, y: 85 }, data: { label: 'QC Frontend (Vue)' }, style: nodeStyle },
  { id: 'be', position: { x: 250, y: 170 }, data: { label: 'Ordering Backend (NestJS)' }, style: greenNodeStyle },
  { id: 'pay', position: { x: 20, y: 170 }, data: { label: 'Payment Gateway' }, style: nodeStyle },
  { id: 'redis', position: { x: 60, y: 270 }, data: { label: 'Redis · Cart / Session' }, style: nodeStyle },
  { id: 'mysql', position: { x: 255, y: 270 }, data: { label: 'MySQL' }, style: nodeStyle },
  { id: 'queue', position: { x: 380, y: 270 }, data: { label: 'BullMQ · Menu Sync' }, style: nodeStyle },
  { id: 'mw', position: { x: 500, y: 85 }, data: { label: 'Group Middleware (OMS)' }, style: nodeStyle },
  { id: 'wpos', position: { x: 500, y: 0 }, data: { label: 'Wowprime POS (WPOS)' }, style: nodeStyle },
];

const wowprimeEdges: Edge[] = [
  { id: 'w1', source: 'liff', target: 'fe', animated: true, style: hotEdge },
  { id: 'w2', source: 'fe', target: 'be', animated: true, style: hotEdge },
  { id: 'w3', source: 'be', target: 'pay', style: dimEdge },
  { id: 'w4', source: 'be', target: 'redis', style: dimEdge },
  { id: 'w5', source: 'be', target: 'mysql', style: dimEdge },
  { id: 'w6', source: 'be', target: 'queue', style: dimEdge },
  { id: 'w7', source: 'be', target: 'mw', animated: true, style: hotEdge, label: 'order webhook', labelStyle: { fill: '#8B949E', fontSize: 9 }, labelBgStyle: { fill: '#0A0E14' } },
  { id: 'w8', source: 'mw', target: 'wpos', animated: true, style: hotEdge },
  { id: 'w9', source: 'mw', target: 'queue', style: dimEdge, label: 'menu push', labelStyle: { fill: '#8B949E', fontSize: 9 }, labelBgStyle: { fill: '#0A0E14' } },
];

/** 電子發票中台：多服務 → 相容 API → 號碼池/佇列 → Provider → 加值中心 */
const einvoiceNodes: Node[] = [
  { id: 'services', position: { x: 250, y: 0 }, data: { label: 'QC / POS / Delivery Services' }, style: nodeStyle },
  { id: 'api', position: { x: 250, y: 85 }, data: { label: 'E-Invoice API · ECPay-compatible' }, style: greenNodeStyle },
  { id: 'guard', position: { x: 20, y: 175 }, data: { label: 'Idempotency · Rate Limit' }, style: nodeStyle },
  { id: 'pool', position: { x: 250, y: 175 }, data: { label: 'Invoice Number Pool' }, style: greenNodeStyle },
  { id: 'queue', position: { x: 470, y: 175 }, data: { label: 'Bull Queue · Retry / Backoff' }, style: nodeStyle },
  { id: 'adapter', position: { x: 250, y: 265 }, data: { label: 'Provider Adapters' }, style: nodeStyle },
  { id: 'dash', position: { x: 490, y: 265 }, data: { label: 'Ops Dashboard · DLQ' }, style: nodeStyle },
  { id: 'gov', position: { x: 250, y: 350 }, data: { label: 'Value-Added Center → MOF' }, style: { ...nodeStyle, border: '1px dashed #8B949E' } },
];

const einvoiceEdges: Edge[] = [
  { id: 'e1', source: 'services', target: 'api', animated: true, style: hotEdge },
  { id: 'e2', source: 'api', target: 'guard', style: dimEdge },
  { id: 'e3', source: 'api', target: 'pool', animated: true, style: hotEdge },
  { id: 'e4', source: 'api', target: 'queue', style: dimEdge },
  { id: 'e5', source: 'pool', target: 'adapter', animated: true, style: hotEdge },
  { id: 'e6', source: 'queue', target: 'adapter', style: dimEdge },
  { id: 'e7', source: 'adapter', target: 'gov', animated: true, style: hotEdge },
  { id: 'e8', source: 'queue', target: 'dash', style: dimEdge },
];

const diagrams: Record<ArchVariant, { nodes: Node[]; edges: Edge[]; label: string }> = {
  wowprime: { nodes: wowprimeNodes, edges: wowprimeEdges, label: 'Wowprime QC 4.0 system architecture diagram' },
  einvoice: { nodes: einvoiceNodes, edges: einvoiceEdges, label: 'E-Invoice Hub system architecture diagram' },
};

export default function ArchitectureDiagram({ variant }: { variant: ArchVariant }) {
  const { nodes, edges, label } = diagrams[variant];
  return (
    <div
      className="h-[50vh] max-h-[450px] min-h-[300px] w-full bg-terminal-bg rounded border border-card-border"
      role="img"
      aria-label={label}
    >
      <ReactFlow
        key={variant}
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
