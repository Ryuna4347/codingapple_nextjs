import Link from 'next/link'
import React from 'react'

export default function ParentPage() {
  return (
    <div className={"mt-2"}>
        <p>layout.tsx는 해당 폴더 하위의 모든 폴더를 덮는 wrapper 컴포넌트로 공통 레이아웃(헤더, 푸터)를 정의할 때 사용합니다.</p>
        <Link href={"./layout_example/child"}>child 페이지로 이동</Link>
    </div>
  )
}