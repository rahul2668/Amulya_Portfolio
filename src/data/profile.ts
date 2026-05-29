import type { Profile, NavItem } from '../types';

export const profile: Profile = {
  name: 'Amulya Pabbala',
  title: 'SAP CFIN Consultant',
  tagline: 'SAP S/4 HANA Finance | Central Finance (CFIN) | SAP FICO | MDG',
  email: 'amulyapabbala3@gmail.com',
  phone: '+91 9963052095',
  location: 'Hyderabad, Telangana',
  linkedin: '',
  github: '',
  summary: `SAP Certified professional with 6 years of experience specialising in SAP HANA Finance and SAP Central Finance (CFIN), including 3 years on a global reconciliation project. Proven expertise in SAP FICO (ECC, S/4 HANA, CFIN), SAP MDG Materials, and integration of FI with SD and MM across Procure-to-Pay and Order-to-Cash cycles. Skilled in AIF monitoring, defect management (P1–P4) via Service Now and Jira, data reconciliation between source and target systems, and delivering root-cause analysis. Strong documentation background — SOP, KEDB, KCD preparation — and hands-on experience supporting UAT, period-end close, and production environments across globally distributed teams.`,
  resumeUrl: '/Amulya_Pabbala_SAP_Consultant_Resume.pdf',
  avatarUrl: '/amulyaprofile.jpg',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Projects Completed', value: '3' },
  { label: 'Companies Worked', value: '2' },
  { label: 'Certifications', value: '1' },
];
