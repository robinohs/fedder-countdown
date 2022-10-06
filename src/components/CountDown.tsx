import React from 'react'

type Props = {
    title: string;
    count: number | string | null;
}

const CountDown = ({title, count}: Props) => {
  return (
    <div className="flex justify-center flex-col text-center text-white">
        <div className="text-5xl">{title}</div>
        <div className="text-8xl font-bold tracking-widest">
          {count ? count : "-----"}
        </div>
      </div>
  )
}

export default CountDown