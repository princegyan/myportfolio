import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

// Dedicated project screenshot imports
import imageZoom from '@/images/projects/zoom-clone.jpg'
import imageScheduler from '@/images/projects/meeting-scheduler.jpg'
import imageLandCheck from '@/images/projects/land-check.jpg'
import imageBolt from '@/images/projects/my-bolt.jpg'
import imagePrecisionFarmer from '@/images/projects/precision-farmer.jpg'

// Certification logo imports (replace with your actual image paths)
import logoTemenos from '@/images/certifications/temenos.png'
import logoGoogle from '@/images/certifications/google.png'
import logoHarvard from '@/images/certifications/harvard.png'
import logoMicrosoft from '@/images/certifications/microsoft.png'
import logoUdacity from '@/images/certifications/udacity.png'

const projects = [
  {
    name: 'Real-Time Video Conferencing App',
    description:
      'Web-based conferencing platform supporting concurrent meetings, screen sharing, recording, and chat built with ReactJS, Clerk, and Stream API.',
    link: { href: 'https://zoomm.netlify.app/', label: 'zoomm.netlify.app' },
    image: imageZoom,
  },
  {
    name: 'Team Meeting Scheduler',
    description:
      'Full-stack platform for project management meeting scheduling featuring real-time collaboration and user authentication.',
    link: { href: 'https://freeschedule.netlify.app/', label: 'freeschedule.netlify.app' },
    image: imageScheduler,
  },
  {
    name: 'Land Check',
    description:
      'Responsive web application enabling users to search and verify lands, built using ReactJS and Tailwind CSS.',
    link: { href: 'https://github.com/princegyan/LandCheckWeb', label: 'github.com' },
    image: imageLandCheck,
  },
  {
    name: 'Ride-Hailing Landing Page',
    description:
      'Web app enabling new driver sign-ups and verification built with ReactJS, Bootstrap 4, and TypeScript.',
    link: { href: 'https://my-bolt.vercel.app/', label: 'my-bolt.vercel.app' },
    image: imageBolt,
  },
  {
    name: 'Precision Farmer',
    description:
      'IoT-embedded system project analyzing farm conditions with programmable sensors, predictive data frameworks, and voice alerts.',
    link: { href: 'https://github.com/princegyan/Precision-Farming', label: 'github.com' },
    image: imagePrecisionFarmer,
  },
]

const certifications = [
  // Individual Temenos Certifications
  {
    title: 'Temenos Implementation Methodology',
    code: 'T3TIM',
    issuer: 'Temenos',
    badge: 'Methodology',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Temenos Transact Limits',
    code: 'T3TLI',
    issuer: 'Temenos',
    badge: 'Limits',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Temenos Transact Collateral',
    code: 'T3TC0',
    issuer: 'Temenos',
    badge: 'Collateral',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Temenos Core Accounts',
    code: 'T3TAC',
    issuer: 'Temenos',
    badge: 'Accounts',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Arrangement Architecture Core',
    code: 'T3AAC',
    issuer: 'Temenos',
    badge: 'AA Core',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Arrangement Architecture Accounts',
    code: 'T3TAAR',
    issuer: 'Temenos',
    badge: 'AA Accounts',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Arrangement Architecture Loans',
    code: 'T3TAAL',
    issuer: 'Temenos',
    badge: 'AA Loans',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Arrangement Architecture Deposits',
    code: 'T3TAAD',
    issuer: 'Temenos',
    badge: 'AA Deposits',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Core Induction Technical',
    code: 'T1ESL-1-T',
    issuer: 'Temenos',
    badge: 'Technical',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Temenos Design Studio',
    code: 'T3DST24',
    issuer: 'Temenos',
    badge: 'Tooling',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Temenos Process Workflow',
    code: 'T3PW',
    issuer: 'Temenos',
    badge: 'Workflow',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  {
    title: 'Temenos Transact Packaging',
    code: 'T3TTP',
    issuer: 'Temenos',
    badge: 'Packaging',
    logo: logoTemenos,
    link: 'https://www.temenos.com/',
  },
  // Other Certifications & Courses
  {
    title: 'Google IT Support Professional Certificate',
    code: 'Coursera',
    issuer: 'Google & Coursera',
    badge: 'IT Professional',
    logo: logoGoogle,
    link: 'https://www.coursera.org/',
  },
  {
    title: 'CS50 Introduction to Computer Science',
    code: 'Harvard / edX',
    issuer: 'Harvard & edX',
    badge: 'Computer Science',
    logo: logoHarvard,
    link: 'https://www.edx.org/',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Azubi Africa & Microsoft',
    badge: 'Cloud',
    logo: logoMicrosoft,
    link: 'https://www.azubiafrica.org/',
  },
  {
    title: 'Google Africa Developer Scholarship',
    code: 'Android Track',
    issuer: 'Google',
    badge: 'Mobile Dev',
    logo: logoGoogle,
    link: 'https://developer.android.com/',
  },
  {
    title: 'Deep Learning Challenge',
    code: 'Bertelsmann AI',
    issuer: 'Udacity & Bertelsmann',
    badge: 'AI & ML',
    logo: logoUdacity,
    link: 'https://www.udacity.com/',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects & Certifications',
  description: 'Things I’ve built across full-stack engineering, IoT, and core banking systems.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve built across full-stack engineering and IoT."
      intro="Here are some of the key web applications, collaboration tools, and hardware projects I've built. Many are open-source, so feel free to check out the repositories or live deployments."
    >
      {/* Projects Grid */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name} className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-auto flex pt-6 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-5 w-5 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>

      {/* Visual Divider */}
      <hr className="my-16 border-zinc-100 dark:border-zinc-700/40" />

      {/* Certifications Section */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Courses & Certifications
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Professional qualifications and technical certifications earned across core banking, cloud architecture, and computer science.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <li
              key={`${cert.title}-${cert.code}`}
              className="group relative flex items-stretch overflow-hidden rounded-2xl border border-zinc-100 bg-white transition hover:shadow-md dark:border-zinc-700/40 dark:bg-zinc-800/60 dark:hover:bg-zinc-800"
            >
              {/* Full-Height Left Image Container */}
              <div className="relative w-28 flex-none bg-zinc-50 p-3 dark:bg-zinc-900/80">
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Main Info */}
              <div className="flex flex-1 flex-col justify-between p-3.5 pl-4">
                <div>
                  <div className="flex items-center justify-between gap-x-2">
                    <span className="inline-flex items-center rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-700 dark:bg-teal-400/10 dark:text-teal-400">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500">
                      {cert.code}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-100 line-clamp-2">
                    <Card.Link href={cert.link} target="_blank">
                      {cert.title}
                    </Card.Link>
                  </h3>
                </div>

                <p className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {cert.issuer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}