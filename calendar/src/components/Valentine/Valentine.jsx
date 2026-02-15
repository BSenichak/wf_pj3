import React, { useEffect, useRef, useState } from 'react'
import style from "./Valentine.module.scss"

export default function Valentine() {
    let [name, setName] = useState("")
    let [message, setMessage] = useState("")
    let [hearts, setHearts] = useState(0)

    let inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    useEffect(()=>{
        setHearts(Math.floor(message.length / 10))
    },[message])

  return (
    <div className={style.wrapper}>
        <label htmlFor="">Для кого</label>
        <input type="text" ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <label htmlFor="">Повідомлення</label>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

       {name && <div className={style.valentinka}>
            <h1>{name}</h1>
            <p>{message}</p>
            <p>{"🩷".repeat(hearts)}</p>
        </div>}
        
    </div>
  )
}
