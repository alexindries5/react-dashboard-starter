export type Entity = {
  id: string;
  name: string;
  type: 'Workspace' | 'Integration' | 'Experiment' | 'Dataset';
  owner: string;
  status: 'Active' | 'Paused' | 'Archived';
  updatedAt: string;
};

export const entitySeed: Entity[] = [
  {
    id: 'ent-001',
    name: 'Northwind Revamp',
    type: 'Workspace',
    owner: 'Amelia Shaw',
    status: 'Active',
    updatedAt: '2024-09-14T08:15:00Z',
  },
  {
    id: 'ent-002',
    name: 'Attribution Upgrade',
    type: 'Experiment',
    owner: 'Jonas Meyer',
    status: 'Paused',
    updatedAt: '2024-09-12T10:45:00Z',
  },
  {
    id: 'ent-003',
    name: 'Billing Data Lake',
    type: 'Dataset',
    owner: 'Priya Patel',
    status: 'Active',
    updatedAt: '2024-09-10T14:05:00Z',
  },
  {
    id: 'ent-004',
    name: 'Amplitude Sync',
    type: 'Integration',
    owner: 'Caleb N.',
    status: 'Active',
    updatedAt: '2024-09-07T18:42:00Z',
  },
  {
    id: 'ent-005',
    name: 'Lifecycle Segments',
    type: 'Workspace',
    owner: 'Luisa Gomez',
    status: 'Archived',
    updatedAt: '2024-08-28T11:10:00Z',
  },
];
