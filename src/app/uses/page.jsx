import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I often get asked about the things I use so here's some of the stuff I dig."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, i7 16GB RAM (2015)">
            I use an older Intel-based 16” MacBook Pro with Ubuntu Linux 24.04 installed.
            I realize I should upgrade this, but it&apos;s comfortable at the moment.
          </Tool>
          <Tool title="WiFi Pineapple Mark V">
            This bad boy is essential for learning about WiFi networks and
            securing them. It&apos;s a lot of fun at coffee shops.
          </Tool>
          <Tool title="RaspberryPi 5">
            The RaspberryPi 4 was when they really began to get usable. It has
            quad-core 64bit ARM Cortex-A76 CPU, 8 GB RAM, and VideoCore VII GPU, supporting OpenGL ES 3.1, Vulkan 1.2.
            Super fun to do all sorts of projects with!
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I&apos;m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Jetbrains IDEs">
            I don&apos;t care if it&apos;s IntelliJ, PHPStorm, DataGrip, or RustRover; Jetbrains makes an awesome IDE.
            They all have their shortcomings but the Jetbrains tools have proved to me to help me
            be incredibly productive debugging.
          </Tool>
          <Tool title="Warp Terminal">
            I used to be an advocate for iTerm2 until I tried Warp. It&apos;s a phenomenal
            modern terminal that uses an LLM to help you remember commands. It works across platform
            and lets you do much more than the terminals of old.
          </Tool>
          <Tool title="VSCode">
            Of course I also use VSCode for most front end and scripting work. It&apos;s keyboard shortcuts
            are incredibly useful and it has a full universe of plugins for everything you could ever want.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Google Keep">
            I use Google Keep so often that it&apos;s almost an extension of my brain. It helps me remember things,
            and stay organized, without actually trying to be organized.
          </Tool>
          <Tool title="Asana">
            Asana is a great project management tool that can be adapted for any style that you
            subscribe to. Super customizable and has everything. It&apos;s as close to Jira but more friendly
            than I&apos;ve been able to find.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
