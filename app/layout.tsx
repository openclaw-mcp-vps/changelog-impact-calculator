import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Changelog Impact Calculator — Predict Customer Impact',
  description: 'Analyze changelog entries and predict which customers will be affected by changes. Generate targeted communication lists automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="288e785d-3dfd-490a-aa2e-23f7ac7e0710"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
