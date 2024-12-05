import Image from "next/image";

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles['footer']}`}>
      <div className={`${styles['footer-profile']}`}>
        <div className={`${styles['profile-name']}`}>
          <div className={`${styles['img-box']}`}>
            <Image width={60} height={60} src={'/home/InfoSection/Profile.png'} alt="프로필" />
          </div>
          <div>
            <p>Lee Kimoon</p>
            <p>Frontend Developer</p>
          </div>
        </div>
        <button className={`${styles['profile-button']}`}>
          More Templates
          <span>
            <Image
              width={18}
              height={18}
              src={'/home/ProjectThumb/linkArrow-b.svg'}
              alt='링크 연결'
            />
          </span>
        </button>
      </div>

      <div className={`${styles['footer-list']}`}>
        <div className={`${styles['list-title']}`}>
          Pages
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={`${styles['list-title']}`}>
          CMS
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={`${styles['list-title']}`}>
          Utillity
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>© 2024. KIMOON. All rights reserved.</div>
    </footer>
  );
}