import React from 'react'
import Feather, { type Feather as TFeather } from './Feather'
import clsx from 'clsx';

type Props = {
  feathers: Array<TFeather>
}

export default function Body(props: Props) {
  const { feathers } = props;

  return (
    <div className='items-center relative flex flex-col'>
      <Hed />
      <Eye position='left' /> <Eye position='right' />
      <Mouth />
      {feathers.map((f, i) => (
        <Feather
          key={f.id ?? 'new'}
          text={f.text} 
          createdAt={f.createdAt} 
          theme={f.theme} 
          position={i}
        />
      ))}
      <Belly />
      <Feetsy position='left' /> <Feetsy position='right' />
    </div>
  )
}

const Hed = () => (
  <div className='h-32 w-32 rounded-full bg-amber-600 translate-y-4'/>
)

const Belly = () => (
  <div className='h-44 w-40 rounded-full bg-amber-600'/>
)

const Mouth = () => (
  <div 
    className='bg-orange-400 w-8 h-6 top-16 absolute right-1/2 translate-x-1/2' 
    style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} 
  />
)

const Eye = ({ position }: { position: 'left' | 'right' }) => (
  <div className={clsx(
    { 
      'left-[70px]': position === 'left',
      'right-[70px]': position === 'right',
    },
    'absolute',
    'top-12',
    'bg-black',
    'w-2 h-2',
    'rounded-full',
  )}/>
)

const Feetsy = ({ position }: { position: 'left' | 'right' }) => (
  <div className={clsx(
    { 
      'left-[70px]': position === 'left',
      'right-[70px]': position === 'right',
    },
    'absolute',
    'bottom-10',
    'text-black',
  )}>Ѫ</div> 
)