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
  title: 'Uses - Prince Alfred Gyan',
  description:
    'Software, languages, frameworks, and developer tools I use for web development, mobile apps, and core banking integrations.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, tools I rely on, and tech I recommend."
      intro="A comprehensive breakdown of the programming languages, backend frameworks, database systems, mobile tools, and productivity applications I use daily."
    >
      <div className="space-y-20">
        <ToolsSection title="Core Banking & Enterprise Dev">
          <Tool title="Design Studio (Eclipse IDE)">
            My primary IDE for Temenos T24 development. It provides the core syntax highlighting, project organization, and jBC compiler hooks needed for building routines and IRIS APIs.
          </Tool>
          <Tool title="jShell (jsh) & TAFC Tools">
            The native command-line interface for compiling and cataloging jBC subroutines, running BASIC and CATALOG commands, and querying multi-value databases directly.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Programming Languages & Frameworks">
          <Tool title="JavaScript / Node.js">
            My go-to backend runtime for building lightweight microservices, REST APIs, and backend tools to complement core systems.
          </Tool>
          <Tool title="ReactJS & React Native">
            My core frontend stack for building modern, responsive web interfaces and cross-platform mobile applications.
          </Tool>
          <Tool title="Python">
            Essential for mathematical computations, data processing scripts, automation, and writing backend pre/post-processing hooks.
          </Tool>
          <Tool title="PHP & HTML5">
            The foundation for web development, building dynamic web applications, server-side scripting, and custom web utilities.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Databases & Cloud APIs">
          <Tool title="SQL ( MySQL, SQLite3)">
            Relational databases I rely on for relational data storage, transactional queries, and embedded storage with SQLite3 in local or mobile applications.
          </Tool>
          <Tool title="NoSQL (MongoDB )">
            Used for flexible schema storage, rapid key-value caching, and unstructured dynamic data objects.
          </Tool>
          <Tool title="Twilio">
            My integration service of choice for SMS notifications, multi-factor authentication (MFA) workflows, and automated communications.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Workstation & Terminal Tools">
          <Tool title="Git & GitHub">
            Version control tool for managing codebases, tracking releases, and collaborating across development projects.
          </Tool>
          <Tool title="Postman">
            Invaluable for testing REST APIs, verifying OAuth2 JWT authentication headers, and validating server response payloads.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Productivity & Planning">
          <Tool title="Microsoft Office Suite">
            My primary tool for organizing complex multi-department operations, tracking technical deliverables, and designing custom project matrix trackers with formula-driven automations.
          </Tool>
          <Tool title="Notion">
            Where I document technical specifications, store reusable code snippets, and maintain project architecture notes.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Design & Asset Creation">
          <Tool title="Adobe Photoshop">
            Used for high-resolution portrait retouching, apparel mockups, and crafting visual assets for event flyers.
          </Tool>
          <Tool title="Figma">
            Great for designing clean user interface layouts, prototyping dashboard mockups, and collaborating on visual ideas.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}