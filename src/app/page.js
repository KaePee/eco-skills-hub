import HomeCoverSection from '@/components/Home/HomeCoverSection'
import HomePage from '@/components/Home/HomePage'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <HomeCoverSection />
      <HomePage />
    </main> 
  )
}
