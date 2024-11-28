import Image from "next/image";
import styles from "@/src/styles/main/InfoSection.module.scss";


export default function InfoSection() {
  return (
    <article className={`${styles['article']}`}>
      <p className={`sub-title`}>front-end developer</p>
      <h1 className={`title`}>
        반갑습니다.
      </h1>
      <div>
        <p>
          코드 구조와 편의성을 고민하며 개발하는 개발자 입니다.
        </p>
        <div className={styles['img-wrap']}>
          <Image width={500} height={500} src={'/home/info-img.webp'} alt="소개글 이미지" />
        </div>
      </div>
    </article>

  );
}