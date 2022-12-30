import React, { FC } from 'react';
import styles from './Home.module.css';
import headshot from './headshot.jpg';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <h1>Summary</h1>
    <article>
      <p>My name is Flor Van Hassel, I'm a 21 year old programming student attending Artesis - Plantijn hogeschool and will graduate in the summer of 2023. While attending Artesis - Plantijn hogeschool I've learned the coding languages of HTML, JavaScript, TypeScript, SQL, C# and Framework React. 
      I'm currently interested in pursuing a career in data analytics when I graduate. Because of my interests in data analytics I've taught myself how to code in Python. As a part of my curriculum I partook in an optional project using Angular.
      </p>
      <img src={headshot} alt="headshot"/>
    </article>
  </div>
);

export default Home;
