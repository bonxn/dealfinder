import './globals.css'

export const metadata = {
  title: 'DealFinder',
  description: '인플루언서 공동구매 딜 추적',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
