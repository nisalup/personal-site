import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

import data from '../data/contact';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Hello  There!</Link></h2>
          <p>Welcome to my own little space on the web.</p>
        </div>
      </header>
      <p>First of all, why I did I end up having my own website?<br/>
        I am not exactly famous, and history confirms that no Software Engineer whose 
        favorite food used to be <i>Kebab Steak</i> with <i>Sauce Algérienne</i> ever was. <br/>
        I use this site mainly to showcase my travel photos, share my (mostly technical) articles 
        and specially for potential collaborators who would like to work with me 
        on (hopefully) cool, sustainable and impactful projects. <br/>
        Oh, and for recruiters <i>(Bonjour!)</i> in case I ever find myself job dating.<br/>
        Please do feel free to read my <Link to="/about">about me</Link> section,
        or to check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or to <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
