import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nisal Upendra</h2>
        <p><a href="mailto:nisalup@gmail.com">mail@nisal.fr</a></p>
        <ul className="icons">
          {data.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} size="2x" color={s.color}/>
              </a>
            </li>
          ))}
        </ul>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nisal.<br/> I&apos;m a Full Stack Developer currently based in Paris.<br/>
        I am a <a href="https://www.univ-st-etienne.fr/">UJM</a> graduate and <a href="https://ucsc.cmb.ac.lk/">UCSC</a> alumni, and
        currently a Software Engineer at <a href="https://azmed.co">AZMed</a>.<br/>
        Before AZMed I was at , <a href="https://www.lafermedesanimaux.com">Livepoint, </a><a href="https://xitech.com.au">XiTech</a>, <a href="https://amsafebridport.com/">Amsafe Bridport</a>, and UCSC.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; 2021 Nisal Upendra (<Link to="/">nisal.fr</Link>).</p>
    </section>
  </section>
);

export default Nav;
