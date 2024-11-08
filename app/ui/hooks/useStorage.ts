'use client';

import { useEffect, useState } from "react";
import { type Feather } from "../Feather";

const TURKEY_DB = 'TurkeyDB';

type DBState = {
  feathers: Array<Feather>;
};
const INITIAL_STATE: DBState = {
  feathers: [],
};

export default function useStorage() {
  const [storage, setStorage] = useState<DBState>(INITIAL_STATE);

  useEffect(() => {
    let result = window.localStorage.getItem(TURKEY_DB);
    if (!result) {
      window.localStorage.setItem(TURKEY_DB, JSON.stringify(INITIAL_STATE));
    }
    if (result) {
      try {
        const parsed = JSON.parse(result) as DBState;
        if (!Array.isArray(parsed?.feathers)) throw Error('feathers is missing');
        setStorage(parsed);
      } catch (error) {
        console.error(`malformatted DB state. ${(error as Error).message}`)
        console.log('resetting DB');
        window.localStorage.removeItem(TURKEY_DB);
        window.localStorage.setItem(TURKEY_DB, JSON.stringify(INITIAL_STATE));
        setStorage(INITIAL_STATE);
      }
    }

    window.addEventListener('storage', (e) => {
      console.log('storage', e)
    })
  }, [])

  function addFeather(f: Feather) {
    let newFeathers = [...storage.feathers, f];
    const newStorage: DBState = {
      ...storage,
      feathers: newFeathers,
    }
    setStorage(newStorage);
    window.localStorage.setItem(TURKEY_DB, JSON.stringify(newStorage))
  }

  return {
    ...storage,
    addFeather,
  }
}
