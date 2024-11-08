'use client';

import React from 'react';
import useStorage from './hooks/useStorage';
import Body from './Body';
import AddFeather from './AddFeather';

export default function Turkey() {
  const { feathers, addFeather } = useStorage();

  return (
    <div>
      <AddFeather addFeather={addFeather} />
      <Body feathers={feathers} />
    </div>
  )
}