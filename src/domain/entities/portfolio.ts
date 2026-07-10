export type ProofItem = {
  kicker: string;
  value: string;
};

export type ProjectDetail = {
  title: string;
  body: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  meta: string[];
  tag: string;
  details: ProjectDetail[];
  links: ProjectLink[];
  defaultOpen?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: SkillItem[];
};

export type SkillItem = {
  label: string;
  iconUrl?: string;
  iconSvgPaths?: string[];
  rasterIconUrl?: string;
};

export type ContactItem = {
  slug: string;
  title: string;
  state: string;
  detailLabel: string;
  href: string;
  body: string;
  iconSvgPaths: string[];
};

export type PortfolioContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    actions: ProjectLink[];
    portraitAlt: string;
    proofTitle: string;
    proofItems: ProofItem[];
  };
  projects: {
    label: string;
    heading: string;
    copy: string;
    items: Project[];
  };
  skills: {
    label: string;
    heading: string;
    copy: string;
    groups: SkillGroup[];
  };
  about: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  contact: {
    label: string;
    heading: string;
    copy: string;
    items: ContactItem[];
  };
  footer: string;
};
