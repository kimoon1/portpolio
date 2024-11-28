import ProjectThumb from "@/src/components/home/ProjectThumb"

export const metadata = {
  title: '포트폴리오',

}






export default async function HomePage() {

  return (
    <>
      <ProjectThumb />
      <div style={{height : '500vh'}}></div>
    </>
  )

}