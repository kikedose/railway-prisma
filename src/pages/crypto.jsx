import React from 'react';
import crypto from 'crypto';

export default function Crypto() {
  console.log(crypto);

  return (
    <p>
      {crypto.randomUUID()}
    </p>
  );
}

/*
import React from 'react';
// import crypto from 'crypto';

export default function Crypto() {
  if (typeof window !== 'undefined') {
    console.log('CLIENT: ', crypto.randomUUID());

    return (
      <p>
        {crypto.randomUUID()}
      </p>
    );
  }

  return (
    <h1>SERVER SIDE</h1>
  );
}
*/
