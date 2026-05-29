import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bp-quantum',
    title: 'BP Quantum — CFIN Implementation',
    client: 'British Petroleum (BP)',
    role: 'SAP Senior Package Implementation Consultant',
    duration: 'Aug 2025 – Present',
    description:
      'S/4 HANA Central Finance implementation for BP, covering global reconciliation, variance analysis, and Group Reporting validation across a distributed international landscape.',
    longDescription: `British Petroleum (BP) is a leading global integrated energy company operating across oil, gas, renewables, trading, and energy solutions. As part of the Quantum CFIN implementation:

• Performed reconciliation between FBW source system and Central Finance (CFIN) to ensure accurate financial data transfer.
• Analyzed variances across Company Code, Ledger, FS Item, GRM Code, Segment, and Business Code.
• Identified mapping, substitution, migration, and ledger group mismatch issues impacting financial postings.
• Conducted FBW to Group Reporting (GR) reconciliations to validate GL classification, GAAP flags, and financial statement alignment.
• Executed global deployment data mapping and validation from source to CFIN.
• Performed Group Reporting Opening Balance Reconciliation and supported Period-End Close activities including validation, error analysis, and reconciliation.
• Supported User Acceptance Testing (UAT) and resolved defects.
• Handled production support, issue resolution, and month-end close support.`,
    technologies: ['SAP S/4 HANA', 'SAP CFIN', 'SAP Group Reporting', 'FBW', 'SLT', 'UAT', 'GL'],
    featured: true,
  },
  {
    id: 'jnj-cfin',
    title: 'Johnson & Johnson — CFIN Support',
    client: 'Johnson & Johnson (JNJ)',
    role: 'SAP Senior Package Implementation Consultant',
    duration: 'Apr 2022 – Jun 2025',
    description:
      "Production support for JNJ MedTech's SAP Central Finance environment — AIF monitoring, defect management, FI/CO reconciliation, and multi-dashboard validation.",
    longDescription: `Johnson & Johnson MedTech innovates at the intersection of biology and technology across Interventional Solutions, Orthopaedics, Surgery and Vision. Key responsibilities on the CFIN Support project:

• AIF Monitoring for all interfaces; created and tracked defects in SMT (Service Now) with full Root Cause Analysis (RCA).
• Resolved P1–P4 priority cases as per SLA targets.
• Provided MDG solutions: Data Extraction, Transformation and Loading of Master Data; key and value mapping via Map Manage Table.
• Performed data reconciliation between source and target systems per business requirements.
• Ran FI reconciliation reports (CFIN standard, real-time SLT replication for FI header, line items, and balances).
• Ran CO reconciliation reports (initial load and real-time SLT replication for CO header, line items, and balances).
• Validated and reconciled data across AO Validity/Accuracy reports, E2E Dashboard, Info Steward, Anaplan, and Data Hub.
• Prepared and maintained SOP, KCD, KEDB, and Job Aid documents in SharePoint.
• Backed up automation team: productivity reports, daily client reports, defect ageing per SLA, MRC lookup file updates.
• Provided end-user support during Month-End Close.`,
    technologies: [
      'SAP Central Finance',
      'SAP MDG',
      'AIF Monitoring',
      'Service Now (SMT)',
      'Analysis for Office (AO)',
      'Anaplan',
      'SLT',
      'SAP FICO',
    ],
    featured: true,
  },
  {
    id: 'carrier-cfin',
    title: 'Carrier — CFIN Pre-Production Support',
    client: 'Carrier',
    role: 'SAP Consultant Package Implementation',
    duration: 'Dec 2020 – Mar 2022',
    description:
      'Pre-production Central Finance support for Carrier — SLA-compliant ticket resolution, bank reconciliation, GL/AP/AR/AA/Banking maintenance, and configuration support.',
    longDescription: `Provided pre-production support and solutions for Carrier, ensuring SLA compliance and efficient resolution of priority-based support tickets:

• Handled day-to-day issues in compliance with SLA requirements.
• Validated and reconciled financial data from source systems to CFIN during initial SLT load.
• Monitored AIF interfaces and created defects in Jira.
• Interacted with business users to resolve tickets and gather requirements.
• Solved maintenance tickets in Workflow, GL, AP, AR, AA, and Banking areas.
• Supported client configuration based on business requirements.
• Provided knowledge transfer to team members on new issues.
• Prepared SOP documents to support routine operations.`,
    technologies: ['SAP Central Finance', 'SAP FICO', 'GL', 'AP', 'AR', 'AA', 'Banking', 'Jira', 'SLT'],
    featured: false,
  },
];
