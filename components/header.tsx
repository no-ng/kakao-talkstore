import Link from 'next/link';
import styles from './header.module.css';

export const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.logo}>
      <h1 className="screen_out">톡스토어</h1>
      <Link href="/">
        <a>
          <h2 className={styles.logo_txt}>
            <img
              className={styles.logo_img}
              src="https://st.kakaocdn.net/commerce_ui/front-ui/real/20210625/100049/assets/images/m640/logo_talkshopping_171207.png"
              alt="톡쇼핑하기"
            />
          </h2>
        </a>
      </Link>
    </div>
  </header>
);
