import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import Photos from '../components/Stats/Personal';

const Stats = () => (
  <Main>
    <Helmet title="Stats" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">My Travel Photos</Link></h2>
        </div>
      </header>
      <Photos />
    </article>
  </Main>
);

export default Stats;