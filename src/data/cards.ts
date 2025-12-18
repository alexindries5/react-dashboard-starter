export type MetricCard = {
  id: string;
  label: string;
  value: string;
  trend: number;
  badge?: string;
};

export const metrics: MetricCard[] = [
  { id: 'revenue', label: 'Monthly Revenue', value: '$214,200', trend: 12.4, badge: 'up 30 days' },
  { id: 'subscribers', label: 'Active Subscribers', value: '18,421', trend: 4.2, badge: 'net +692' },
  { id: 'churn', label: 'Churn Rate', value: '2.3%', trend: -0.6, badge: 'vs last month' },
  { id: 'support', label: 'Avg. Response', value: '1m 22s', trend: 8.1, badge: 'helpdesk SLA' }
];

export type ActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
};

export const activities: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'Enterprise onboarding completed',
    description: 'Acme Corp. finished security review and provisioned 340 seats.',
    time: '2h ago',
  },
  {
    id: 'act-2',
    title: 'Usage spike detected',
    description: 'Northwind increased API consumption by 38% following the new rollout.',
    time: '4h ago',
  },
  {
    id: 'act-3',
    title: 'New automation live',
    description: 'Lead routing workflow now syncs real-time intents to CRM.',
    time: 'Yesterday',
  },
  {
    id: 'act-4',
    title: 'Quarterly plan locked',
    description: 'Finance approved FY roadmap with performance guardrails.',
    time: '2d ago',
  },
];
