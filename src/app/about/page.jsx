import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/cmb/me.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Christopher Baughman. I live in Harrisburg, and I create things.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          I’m Christopher Baughman. I live in Harrisburg, and I create things.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved taking things apart and putting them back together in new ways since I was
              a child. When I was around 10 I started to find weird bugs in video games that made me
              investigate how I could use those bugs in new ways. Eventually I started coding. I love
              solving problems by engineering a solution in code.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              I started collecting copies of all of the space agencies published pictures. Then I started
              learning about how everything here came from up there. My interest in astrophysics developed to
              satisfy my curiousity of how everything works and fits together.
            </p>
            <p>
              In 2003 I started freelancing under the name Baughman Consulting. This opened the way to learning
              about various aspects of technology. I did jobs for a large web hosting company, wrote
              software for truckers to bid on jobs faster, and even worked on early implementations of
              Build a Bear applications. Years later, I created custom Android builds (ROMs) for HTC, Motorola, and Google phones.
            </p>
            <p>
              Today, I write code for many different companies and try to solve their largest problems. I build various
              equipment with Raspberry PIs, and explore radio frequencies with software defined radio. I have written
              large scale applications that are still in use all across the north American supply chain, and smaller scale
              financial applications for an insurance company. I love learning, and continue to create new things all the time.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/cmbaughman" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/cmbdev/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/cmbaughman" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/cbaughman/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:cmbdev@gmx.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              cmbdev@gmx.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
