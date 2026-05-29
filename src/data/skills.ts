import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    category: 'SAP Finance Core',
    icon: 'DollarSign',
    skills: [
      { name: 'SAP S/4 HANA Finance', level: 90 },
      { name: 'SAP Central Finance (CFIN)', level: 90 },
      { name: 'SAP FICO', level: 85 },
      { name: 'SAP ECC', level: 80 },
      { name: 'SAP R/3', level: 75 },
    ],
  },
  {
    category: 'SAP MDG & Integration',
    icon: 'GitMerge',
    skills: [
      { name: 'SAP MDG Materials', level: 85 },
      { name: 'Key/Value Mapping', level: 85 },
      { name: 'AIF Monitoring', level: 90 },
      { name: 'SLT Replication', level: 85 },
      { name: 'FI-SD Integration', level: 80 },
      { name: 'FI-MM Integration', level: 80 },
    ],
  },
  {
    category: 'Finance Modules',
    icon: 'BookOpen',
    skills: [
      { name: 'General Ledger (GL)', level: 85 },
      { name: 'Accounts Payable (AP)', level: 80 },
      { name: 'Accounts Receivable (AR)', level: 80 },
      { name: 'Asset Accounting (AA)', level: 75 },
      { name: 'Banking & EBS', level: 75 },
      { name: 'Document Splitting', level: 80 },
    ],
  },
  {
    category: 'Tools & Monitoring',
    icon: 'Monitor',
    skills: [
      { name: 'Service Now (SMT)', level: 90 },
      { name: 'Jira', level: 85 },
      { name: 'SharePoint', level: 80 },
      { name: 'MS Office', level: 90 },
      { name: 'MS Excel (Advanced)', level: 85 },
    ],
  },
  {
    category: 'Analytics & Reporting',
    icon: 'TrendingUp',
    skills: [
      { name: 'Analysis for Office (AO)', level: 85 },
      { name: 'Anaplan', level: 80 },
      { name: 'E2E Dashboard', level: 80 },
      { name: 'Info Steward', level: 75 },
      { name: 'Data Hub', level: 75 },
      { name: 'SAP Group Reporting', level: 80 },
    ],
  },
  {
    category: 'Process & Documentation',
    icon: 'ClipboardList',
    skills: [
      { name: 'Root Cause Analysis (RCA)', level: 90 },
      { name: 'SOP Preparation', level: 90 },
      { name: 'KEDB Management', level: 85 },
      { name: 'UAT Support', level: 85 },
      { name: 'Period-End Close', level: 85 },
      { name: 'SLA Management', level: 85 },
    ],
  },
];
