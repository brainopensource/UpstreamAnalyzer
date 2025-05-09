import Link from 'next/link'
import { FeatureBox } from '@/components/FeatureBox'
import { FeatureIcon } from '@/components/icons/FeatureIcon'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Button } from '@/components/ui/Button'

export default function Home() {
  const features = [
    {
      title: "Fetch",
      description: "Connect to any data source.",
      type: "fetch" as const
    },
    {
      title: "Process",
      description: "Clean and transform instantly.",
      type: "process" as const
    },
    {
      title: "Aggregate",
      description: "Summarize with a click.",
      type: "aggregate" as const
    },
    {
      title: "Model",
      description: "Build and deploy models.",
      type: "model" as const
    }
  ]

  const stats = [
    { label: "Data Sources", value: "50+" },
    { label: "Processed Records", value: "1M+" },
    { label: "Barrels Yearly", value: "8 Bi+" }
  ]

  return (
    <div className="animated-gradient-bg flex flex-col gap-6 max-w-5xl mx-auto px-4 py-4 min-h-screen">
      <Hero
        title="Upstream Data Tool"
        subtitle="The all-in-one solution for Upstream Researchers and Data Scientists"
        logoSrc="/assets/wm-logotype-white-72dpi.png"
        logoAlt="Wood Mackenzie Logotype"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            icon={<FeatureIcon type={feature.type} />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="mt-20">
        <Stats items={stats} />
      </div>

      <div className="text-center mt-24">
        <Link href="/login">
          <Button size="lg">
            Start
          </Button>
        </Link>
      </div>
    </div>
  )
}