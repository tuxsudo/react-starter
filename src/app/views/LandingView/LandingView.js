import React from 'react';
import Hero from '../../components/Hero';
import Button from '../../components/Button';
import styles from './style.css';

const LandingView = ({hero, title, subtitle, cta}) => (
    <section>
      <Hero
        title={title}
        subtitle={subtitle}
        className={styles.hero}
        bgSrc={hero}
        overlay="light"
      />

      <a href={cta} className={styles.link}>
        <Button>learn more</Button>
      </a>

    </section>
);



export default LandingView;
