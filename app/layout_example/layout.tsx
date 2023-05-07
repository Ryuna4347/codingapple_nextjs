import React, { ReactNode } from 'react'

const layout = ({children}:{children: ReactNode}) => {
  return (
    <>
        <div>
            <p>layout입니다. 이 layout은 하위 페이지들까지 공통적으로 포함됩니다.</p>
        </div>
        <div>{children}</div>
    </>
  )
}

export default layout