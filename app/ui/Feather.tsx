import clsx from 'clsx';
import React from 'react'

export type FeatherTheme = 'purple' | 'orange' | 'red' | 'yellow'

export type Feather = {
  text: string;
  theme: FeatherTheme;
  /** nullable because this is populated on submission */
  id?: string;
  /** ISO Datetime stirng */
  createdAt?: string;
}

type FeatherProps = Feather & {
  position: number;
  updatedAt?: string;
};

export default function Feather(props: FeatherProps) {
  const { text, theme, createdAt, position } = props;

  const bg = (() => {
    switch (theme) {
      case 'orange':
        return 'bg-orange-500';
      case 'purple':
        return 'bg-purple-500';
      case 'red':
        return 'bg-red-500';
      case 'yellow':
        return 'bg-yellow-500';
      default:
        return 'bg-yellow-500';
    }
  })();
  const location = (() => {
    if (position === 0) return 'bottom-0 right-[96%]';
    if (position === 1) return 'bottom-[4%] right-[96%]';
    if (position === 2) return 'bottom-[8%] right-[96%]';
  })();
  
  return (
    <div className={clsx('absolute w-40 min-h-8 flex', location)}>
      <span style={{ clipPath: 'ellipse(100% 50% at 100% 50%)'}} className={clsx(bg, 'w-8 rounded-tl-[100%] rounded-bl-[100%]')}/>
      <span className={clsx(bg, 'flex-1 flex justify-center items-center')}>{text}</span>
      {createdAt && <span className='sr-only'>{createdAt}</span>}
      <span style={{ clipPath: 'ellipse(100% 50% at 0% 50%)'}} className={clsx(bg, 'w-8 rounded-tr-[100%] rounded-br-[100%]')}/>
    </div>
  )
}