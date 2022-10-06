import React from 'react'

type Props = {
    title: string;
    count: number | null;
}

const CountDown = ({title, count}: Props) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-5 p-4 text-white">
        <div className="text-5xl">{title}</div>
        <div className="text-8xl font-bold tracking-widest">
          {count ? count : "-----"}
        </div>
      </div>
  )
}

export default CountDown