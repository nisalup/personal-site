import React from 'react';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const Photos = () => (
  <>
    <h3>Here's some of my snaps</h3>
    <Gallery photos={photos} />
  </>
);

export default Photos;
