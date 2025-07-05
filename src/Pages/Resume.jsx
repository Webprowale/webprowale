import React from 'react';
import Pdf from '../Components/Joshua_Akinwale_1.pdf';

function Resume() {
  return (
    <div>
      <iframe src={Pdf} width="100%" height="800px" />
    </div>
  );
}

export default Resume;
