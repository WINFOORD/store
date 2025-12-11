// app/[locale]/layout.tsx

import { ReactNode } from 'react'
import { Locale } from '../src/i18n/config'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: Locale }
}) {
  const { locale } = await params

  return (
    <html >
      <body>{children}</body>
    </html>
  )
}
