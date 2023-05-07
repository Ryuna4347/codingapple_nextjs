'use client';
import React, { useState } from 'react'

const ClientComponent = () => {
    const [count, setCount] = useState<number>(0);

  return (
    <>
        <div>여기는 클라이언트 컴포넌트를 사용하는 구간입니다. 클라이언트 컴포넌트에서는 기존 React처럼 상태값, Hook 등을 관리 할 수 있습니다!</div>
        <br/>
        <p>현재 값 {count}</p>
        <button onClick={(e)=>{e.stopPropagation(); setCount(count=>count+1)}}>증가</button>
    </>
    )
}

export default ClientComponent;