import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPacman from '@/images/cmb/pacman.jpeg'
import logoShooter from '@/images/cmb/htc_evo_3d.jpg'
import logoJs from '@/images/cmb/js.png'
import logoUrl from '@/images/cmb/url-heart.png'
import logoSql2Knex from '@/images/cmb/sql2knex.jpg'

const projects = [
  {
    name: 'cmbutil',
    description:
      'Convenience class for Javascript projects written in vanilla js.',
    link: { href: 'https://github.com/cmbaughman/cmbutil', label: 'github.com/cmbaughman/cmbutil' },
    logo: logoJs,
  },
  {
    name: 'cmbdev-fe-boilerplate',
    description:
      'Quick and fairly opinionated boilerplate for my front end projects. Creates a static website minified, transpiled, and compressed.',
    link: { href: 'https://github.com/cmbaughman/cmbdev-fe-boilerplate', label: 'github.com/cmbaughman/cmbdev-fe-boilerplate' },
    logo: logoJs,
  },
  {
    name: 'SQL2Knex',
    description:
      'Create Knex seed files from existing databases.',
    link: { href: 'https://github.com/cmbaughman/SQL2Knex', label: 'github.com/cmbaughman/SQL2Knex' },
    logo: logoSql2Knex,
  },
  {
    name: 'PACMan ROM',
    description:
      'P.A.C.Man fully open source Android ROM for the HTC Evo 3D series of Phones.',
    link: { href: 'https://xdaforums.com/t/rom-p-a-c-man-v-23-0-0-official-june-11-2013.2040832/', label: 'pacman.rom' },
    logo: logoPacman,
  },
  {
    name: 'Android HTC Shooter Device Drivers',
    description:
      'Open source version of the HTC Shooter device drivers for use in Android projects.',
    link: { href: 'https://github.com/cmartinbaughman/android_vendor_pac', label: 'github.com/cmb/android_vendor_pac' },
    logo: logoShooter,
  },
  {
    name: 'Comsys',
    description:
      'A full featured commission and portal for URL Insurance Group handles commission payments and commission data ingestion from many different providers.',
    link: { href: 'https://urlinsgroup.com', label: 'urlinsgroup.com' },
    logo: logoUrl,
  }
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
  title: 'Projects',
  description: 'Some of the stuff I made.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Some of the stuff I made."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
