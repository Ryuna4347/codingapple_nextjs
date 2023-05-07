import Link from 'next/link'
import React from 'react'

const ChildrenPage = () => {
  return (
    <div className={"mt-2"}>
        <p>ChildrenPage입니다. 이 디렉토리에는 page.tsx만 존재합니다.</p>
        <Link href={"./layout_example"}>부모 페이지로 이동</Link>
    </div>
  )
}

export default ChildrenPage