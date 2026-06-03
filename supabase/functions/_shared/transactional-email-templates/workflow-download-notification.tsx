import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  fullName?: string
  organization?: string
  workEmail?: string
  downloadedAt?: string
}

const WorkflowDownloadNotificationEmail = ({
  fullName,
  organization,
  workEmail,
  downloadedAt,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New workflow download request from {fullName ?? 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Workflow Download Request</Heading>
        <Text style={text}>
          A visitor downloaded the AI Meeting Knowledge System workflow guide.
        </Text>
        <Section style={card}>
          <Row label="Full Name" value={fullName} />
          <Row label="Organization" value={organization} />
          <Row label="Work Email" value={workEmail} />
          <Row label="Download Timestamp" value={downloadedAt} />
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This notification was sent automatically by the Arnas website.
        </Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value?: string }) => (
  <div style={{ marginBottom: '12px' }}>
    <Text style={rowLabel}>{label}</Text>
    <Text style={rowValue}>{value ?? '—'}</Text>
  </div>
)

export const template = {
  component: WorkflowDownloadNotificationEmail,
  subject: 'New Workflow Download Request',
  displayName: 'Workflow download notification',
  to: 'info_arnaintelligence@alis-global.com',
  previewData: {
    fullName: 'Jane Doe',
    organization: 'Acme University',
    workEmail: 'jane@acme.edu',
    downloadedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Poppins, Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0F172A', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: '0 0 20px' }
const card = {
  background: '#F8FAFC',
  border: '1px solid #E2E8F0',
  borderRadius: '12px',
  padding: '20px',
}
const rowLabel = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: '#0D9488',
  fontWeight: 600,
  margin: '0 0 4px',
}
const rowValue = { fontSize: '14px', color: '#0F172A', margin: '0' }
const hr = { borderColor: '#E2E8F0', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#94A3B8', margin: '0' }