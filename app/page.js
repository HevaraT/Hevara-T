'use client'

import dynamic from 'next/dynamic'

const HevaraPremium = dynamic(() => import('../hevara-premium-website-with-images.jsx'), {
  ssr: false,
  loading: () => <div style={{ background: '#0f172a', minHeight: '100vh' }} />
})

export default function Home() {
  return <HevaraPremium />
}
