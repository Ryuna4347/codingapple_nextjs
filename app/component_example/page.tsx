import React from 'react'
import ClientComponent from './client_component'

const ComponentExample = () => {
  return (
    <div className='flex-auto flex-row m-12'>
        <h1 className="font-semibold text-xl">Server 컴포넌트</h1>
        <p>현재 보이는 페이지는 서버 컴포넌트를 기반으로 렌더링되고 있습니다.</p>
        <p>서버 컴포넌트를 사용시 서버에서 컴포넌트 렌더링이 실행이 되어 클라이언트에 제공됩니다.</p>
        <h2 className="font-semibold text-base mt-4">Server 컴포넌트를 사용하는 이유</h2>
        <p>Server 컴포넌트를 사용하는 대표적인 이유는 아래와 같습니다.</p>
        <ul className='list-inside list-disc'>
            <li className='indent-1'>서버에서 미리 렌더링해서 클라이언트에 내려주기 때문에 클라이언트 단에서 설치할 번들의 크기를 줄일 수 있다.</li>
            <li className='indent-1'>자동 코드 스플리팅을 지원한다.</li>
            <li className='indent-1'>SEO 최적화에 좋다.</li>
        </ul>
        <h2 className="font-semibold text-base mt-2">Client 컴포넌트를 사용해야하는 경우</h2>
        <p>Server 컴포넌트를 사용한다고 해도 모든 페이지의 구성을 Server 컴포넌트로 행할 수는 없습니다. 보통 데이터를 받아오는 부분, 전체적인 페이지 레이아웃 등을 Server 컴포넌트로 처리하며, 말단에서 사용자의 입력에 반응하거나 상태를 저장하여 사용하는 경우 Client 컴포넌트로 처리합니다.</p>
        {/* <h2 className='text-base font-medium mt-2'>Client 컴포넌트의 사용방법</h2>
        <code className='code'>'use client'</code>를 컴포넌트 파일 최상단에 기입합니다. */}
        <div className='mt-4'>
            <p>------------Client Component 경계선-----------</p>
            <ClientComponent />
        </div>
    </div>
  )
}

export default ComponentExample