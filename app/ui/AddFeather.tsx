
import React from 'react'
import { Feather } from './Feather'
import { v4 } from 'uuid';

type Props = {
  addFeather: (f: Feather) => void;
}

export default function AddFeather(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { addFeather } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    addFeather({
      text: formData.get('text')?.toString() ?? '',
      theme: 'yellow',
      createdAt: new Date().toISOString(),
      id: v4(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='text'>Text</label>
        <input className='bg-slate-500' type='text' name='text' required maxLength={150} minLength={2} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}