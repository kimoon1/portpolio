
import styles from "@/src/styles/main/InfoSection.module.scss";
import Image from "next/image";


export default function InfoSection() {
  return (
    <article className={`${styles['article']} w-1\/2`}>
      <div className={`${styles["profile-info"]} flex flex-col justify-between gap-5 `}>
        <div className={`${styles["name-box"]} flex gap-5 items-center`}>
          <div className={`${styles["img-wrap"]} aspect-square overflow-hidden rounded-full`}>
            <Image width={60} height={60} src={'/home/InfoSection/Profile.png'} alt="프로필 이미지" />
          </div>
          <div className="name-text">
            <h1>Lee Kimoon</h1>
            <div>Frontend Developer</div>
          </div>
        </div>
        <div className="self-introduction-box">
          자기소개 넣을 예정 빠빠밤
          자기소개 넣을 예정 빠빠밤<br />
          자기소개 넣을 예정 빠빠밤
          자기소개 넣을 예정 빠빠밤
        </div>
      </div>
      <div className={`${styles["project-box"]}`}>
        <Image className="w-full h-full object-cover" width={465} height={600} src={'/home/ProjectThumb/exam01.png'} alt="테스트 이미지"/>
        <div className={`${styles["category"]}`}>SHOP</div>
        <Image className={`${styles['round-top']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
        <Image className={`${styles['round-bottom']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
      </div>
      <div className={`${styles["project-box"]}`}>
        <Image className="w-full h-full object-cover" width={465} height={600} src={'/home/ProjectThumb/exam02.png'} alt="테스트 이미지"/>
        <div className={`${styles["category"]}`}>ETC</div>
        <Image className={`${styles['round-top']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
        <Image className={`${styles['round-bottom']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
      </div>
      <div className={`${styles["project-box"]}`}>
        <Image className="w-full h-full object-cover" width={465} height={600} src={'/home/ProjectThumb/test01.jpg'} alt="테스트 이미지"/>
        <div className={`${styles["category"]}`}>Shop</div>
        <Image className={`${styles['round-top']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
        <Image className={`${styles['round-bottom']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
      </div>
      <div className={`${styles["project-box"]}`}>
        <Image className="w-full h-full object-cover" width={465} height={600} src={'/home/ProjectThumb/test02.jpg'} alt="테스트 이미지"/>
        <div className={`${styles["category"]}`}>Shop</div>
        <Image className={`${styles['round-top']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
        <Image className={`${styles['round-bottom']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
      </div>
      
    </article>

  );
}