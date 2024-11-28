import InfoSection from "@/src/components/home/InfoSection"
import ProjectThumb from "@/src/components/home/ProjectThumb"

export const metadata = {
  title: '포트폴리오',

}






export default async function HomePage() {

  return (
    <div className="flex gap-2.5">
      <ProjectThumb />
      <InfoSection />
    </div>
  )

}