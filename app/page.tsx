import PagesCard from '@/components/PagesCard'
import React from 'react'

export default function page() {
  const mockPages = [
    { id: '1', label: 'Page 1' },
    { id: '2', label: 'Page 2' },
    { id: '3', label: 'Page 3' },
    { id: '4', label: 'Page 4' },
  ];

  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-4'>
      <PagesCard
        pages={mockPages}
      />
    </div>
  )
}
