import React, { CSSProperties } from 'react'

function HeroCard({img,className, title, author, time}:{img:string, className?: string,title:string,author:string,time:string}) {
  const style: CSSProperties = {
    backgroundImage: `url('${img}')`,
  }
  return (
    <div style={style} className={`rounded-xl object-cover bg-no-repeat bg-cover ${className}`}></div>
  )
}

export default HeroCard