import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

function Home({ main }) {
 console.log(main)
  return (
    <div>
      {main && <EditableArea content={main} />}
    </div>
  );
}

export default Home;