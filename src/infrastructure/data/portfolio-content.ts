import type { PortfolioContent } from '../../domain/entities/portfolio';

export const portfolioContent: PortfolioContent = {
  hero: {
    eyebrow: 'Software Developer',
    title: 'I build useful software with real operational outcomes.',
    subtitle: 'Full-stack systems, automation flows, and product work shaped for real users, not just demos.',
    body: 'Beyond code, my real value is reliability. I treat software development as a commitment to responsibility: shipping on time, owning the system end to end, and making products easier to use, audit, and extend.',
    actions: [
      { label: 'View selected work', href: '#projects' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcos-alvarez-calabria' },
      { label: 'GitHub', href: 'https://github.com/marcosAlvarezCalabria?tab=repositories' }
    ],
    portraitAlt: 'Portrait of Marcos Alvarez',
    proofTitle: 'Current proof',
    proofItems: [
      { kicker: 'In production', value: 'Epoxiron is used daily by a real industrial client.' },
      { kicker: 'Core focus', value: 'TypeScript, Node.js, React, integrations, and workflow automation.' },
      { kicker: 'Working style', value: 'Architecture, product thinking, and deployment treated as one system.' }
    ]
  },
  projects: {
    label: 'Selected work',
    heading: 'A portfolio built around shipped systems, not tutorial-scale projects.',
    copy: 'The first two projects carry the strongest signal: real operations, real system boundaries, and real product ownership. The public projects extend that story with accessible demos and repositories.',
    items: [
      {
        slug: 'epoxiron',
        title: 'Epoxiron',
        summary: 'A production full-stack system that automates delivery notes, pricing logic, and voice-driven order entry for an industrial workshop.',
        meta: ['Private client software', 'TypeScript end to end', 'Voice workflow'],
        tag: 'Featured',
        defaultOpen: true,
        details: [
          { title: 'What it does', body: 'Replaces a manual workshop workflow with a system that creates delivery notes, calculates prices from business rules, and tracks each note through draft, pending, and reviewed states.' },
          { title: 'My role', body: 'Solo full-stack development across architecture, business logic, AI integration, deployment, and infrastructure.' },
          { title: 'Stack', body: 'Node.js, Express, Prisma, PostgreSQL, React 19, Vite, Tailwind CSS, React Query, Zustand, Docker Compose, Cloudflare, R2, Gemini, Ollama, OpenAPI, and Vitest.' },
          { title: 'Concrete outcome', body: 'Used daily by a real client, with pricing logic centralized in the backend and a voice pipeline that turns spoken input into structured operational data.' }
        ],
        links: [
          { label: 'Live: private software' },
          { label: 'Repo: private' },
          { label: 'Asset pending: short demo video' }
        ]
      },
      {
        slug: 'hermes-agent',
        title: 'Hermes Agent',
        summary: 'An external agent layer that operates Epoxiron through dedicated API endpoints, allowing workshop actions to happen outside the web interface.',
        meta: ['Telegram workflow', 'API-first integration', 'Separate auth model'],
        tag: 'Architecture',
        details: [
          { title: 'What it solves', body: 'Lets an external assistant create delivery notes, query status, and trigger workshop actions without coupling automation to the web session.' },
          { title: 'My role', body: 'I designed the integration architecture, implemented the dedicated endpoints, and defined the security boundary for the agent channel.' },
          { title: 'Stack', body: 'Node.js, Express, dedicated /api/hermes-tools/* endpoints, x-hermes-secret authentication, and Telegram.' },
          { title: 'Concrete outcome', body: 'Established a cleaner pattern for external automation by separating user authentication from agent authentication.' }
        ],
        links: [
          { label: 'Live: not a public web product' },
          { label: 'Repo: pending confirmation' },
          { label: 'Asset pending: Telegram demo' }
        ]
      },
      {
        slug: 'cinehub',
        title: 'CineHub',
        summary: 'Full-stack SPA for movie discovery with JWT authentication, structured React state management, and cinema geolocation.',
        meta: ['React + Node', 'Live demo available', 'Video walkthrough available'],
        tag: 'Public',
        details: [],
        links: [
          { label: 'Live site', href: 'https://cine-hub.fly.dev/' },
          { label: 'Repository', href: 'https://github.com/marcosAlvarezCalabria/cine-hub-repo.git' },
          { label: 'Video', href: 'https://youtu.be/0vs-VgoezPc' }
        ]
      },
      {
        slug: 'conoxchange',
        title: 'ConoXchange',
        summary: 'Peer-to-peer skill exchange marketplace with protected CRUD flows, session management, and MongoDB relationships for users and events.',
        meta: ['Node + Handlebars', 'Live demo available', 'MVC architecture'],
        tag: 'Public',
        details: [],
        links: [
          { label: 'Live site', href: 'https://conoxchange.fly.dev' },
          { label: 'Repository', href: 'https://github.com/marcosAlvarezCalabria/conoXchange.git' },
          { label: 'Video', href: 'https://youtu.be/QlVYOfzwYF4' }
        ]
      },
      {
        slug: 'peru-inkas-travel',
        title: 'Peru Inkas Travel',
        summary: 'Tourism landing page optimized for SEO, speed, and mobile-first usage, with route visualization through Google Maps API.',
        meta: ['Tailwind CSS', 'Google Maps API', 'Live demo available'],
        tag: 'Public',
        details: [],
        links: [
          { label: 'Live site', href: 'https://peruinkastravel.netlify.app/' },
          { label: 'Video', href: 'https://youtu.be/GQmT85SFWLo' },
          { label: 'Repository not exposed' }
        ]
      }
    ]
  },
  skills: {
    label: 'Skills',
    heading: 'Grouped by practice, not by keyword dump.',
    copy: 'The goal is to show how I work across systems: backend, frontend, deployment, and product logic moving together instead of as disconnected checkboxes.',
    groups: [
      {
        title: 'Backend and data',
        skills: [
          { label: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/000000' },
          { label: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/000000' },
          { label: 'Express', iconUrl: 'https://cdn.simpleicons.org/express/000000' },
          { label: 'Prisma', iconUrl: 'https://cdn.simpleicons.org/prisma/000000' },
          { label: 'PostgreSQL', iconUrl: 'https://cdn.simpleicons.org/postgresql/000000' },
          { label: 'MongoDB', iconUrl: 'https://cdn.simpleicons.org/mongodb/000000' }
        ]
      },
      {
        title: 'Frontend and UX',
        skills: [
          { label: 'React', iconUrl: 'https://cdn.simpleicons.org/react/000000' },
          { label: 'Vite', iconUrl: 'https://cdn.simpleicons.org/vite/000000' },
          { label: 'Tailwind CSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/000000' },
          { label: 'React Query', iconUrl: 'https://cdn.simpleicons.org/reactquery/000000' },
          { label: 'Zustand', rasterIconUrl: 'https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/logo192.png' },
          { label: 'Responsive UI', iconSvgPaths: ['M5 6h14v12H5z', 'M9 10h6', 'M9 14h4'] }
        ]
      },
      {
        title: 'Infra and product delivery',
        skills: [
          { label: 'Docker Compose', iconUrl: 'https://cdn.simpleicons.org/docker/000000' },
          { label: 'Cloudflare', iconUrl: 'https://cdn.simpleicons.org/cloudflare/000000' },
          { label: 'OAuth', iconSvgPaths: ['M12 4l6 3v5c0 3.6-2 6.6-6 8-4-1.4-6-4.4-6-8V7z', 'M10 12l1.4 1.4L14.5 10.3'] },
          { label: 'Swagger', iconUrl: 'https://cdn.simpleicons.org/swagger/000000' },
          { label: 'Vitest', iconUrl: 'https://cdn.simpleicons.org/vitest/000000' },
          { label: 'Automation flows', iconSvgPaths: ['M6 8h12', 'M6 12h8', 'M6 16h12', 'M16 10l2 2-2 2'] }
        ]
      }
    ]
  },
  about: {
    label: 'About',
    heading: 'I care about shipping software that is reliable, usable, and accountable.',
    paragraphs: [
      'I see development as more than learning technologies. For me, it is also a matter of responsibility: meeting deadlines, supporting the team, and taking ownership of the outcome.',
      'I am especially interested in work where engineering quality and product usefulness meet: internal tools, workflow automation, API integrations, and systems that reduce operational friction.'
    ]
  },
  contact: {
    label: 'Contact',
    heading: 'Open to product, freelance, and engineering conversations.',
    copy: 'The fastest way to reach me is through LinkedIn. GitHub and CV stay available for code review and background.',
    items: [
      {
        slug: 'linkedin',
        title: 'LinkedIn',
        state: 'Tap to open',
        detailLabel: 'Profile link',
        href: 'https://www.linkedin.com/in/marcos-alvarez-calabria',
        body: 'linkedin.com/in/marcos-alvarez-calabria',
        iconSvgPaths: ['M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 0 0 3.3 4.97c0 1.08.87 1.96 1.93 1.96h.02a1.96 1.96 0 1 0 0-3.93ZM20.7 12.74c0-3.49-1.86-5.11-4.35-5.11-2 0-2.9 1.1-3.4 1.88V8.5H9.57c.04.67 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.67.13-.91.27-.67.87-1.37 1.9-1.37 1.33 0 1.86 1.02 1.86 2.52V20h3.38v-7.26Z']
      },
      {
        slug: 'github',
        title: 'GitHub',
        state: 'Tap to open',
        detailLabel: 'Repository profile',
        href: 'https://github.com/marcosAlvarezCalabria?tab=repositories',
        body: 'github.com/marcosAlvarezCalabria',
        iconSvgPaths: ['M12 .5C5.65.5.5 5.8.5 12.34c0 5.23 3.3 9.66 7.88 11.23.58.11.79-.26.79-.58 0-.29-.01-1.24-.02-2.25-3.2.71-3.88-1.39-3.88-1.39-.52-1.37-1.28-1.73-1.28-1.73-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.82 2.7 1.29 3.36.99.1-.77.4-1.29.73-1.58-2.55-.3-5.23-1.31-5.23-5.84 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.52.11-3.17 0 0 .97-.32 3.19 1.21a10.76 10.76 0 0 1 5.8 0c2.21-1.53 3.18-1.21 3.18-1.21.63 1.65.24 2.87.12 3.17.74.83 1.19 1.89 1.19 3.18 0 4.54-2.68 5.54-5.24 5.84.41.36.78 1.06.78 2.14 0 1.55-.02 2.8-.02 3.18 0 .32.21.7.8.58A11.86 11.86 0 0 0 23.5 12.34C23.5 5.8 18.35.5 12 .5Z']
      },
      {
        slug: 'cv',
        title: 'CV',
        state: 'Tap to open',
        detailLabel: 'Resume link',
        href: 'https://drive.google.com/file/d/1cXay5tqPULuw5wr4k69LCv8oJpJovpCJ/view?usp=drive_link',
        body: 'Open current resume',
        iconSvgPaths: ['M6 2.5A2.5 2.5 0 0 0 3.5 5v14A2.5 2.5 0 0 0 6 21.5h12a2.5 2.5 0 0 0 2.5-2.5V8.56a2.5 2.5 0 0 0-.73-1.77l-3.56-3.56A2.5 2.5 0 0 0 14.44 2.5H6Zm7.5 1.75v3.5c0 .97.78 1.75 1.75 1.75h3.5V19A.75.75 0 0 1 18 19.75H6A.75.75 0 0 1 5.25 19V5A.75.75 0 0 1 6 4.25h7.5ZM8 11h8v1.5H8V11Zm0 3.5h8V16H8v-1.5Z']
      }
    ]
  },
  footer: 'Built as a standalone preview entry so the portfolio can be reviewed directly from this workspace.'
};
