# 포트폴리오 프로젝트 (ver 2.0)

## 목표

- Next.js 14 숙련도 증가
  - 렌더링 구조
  - config 설정 방식 습득
- scss.module 숙련도 증가
  - 필요성 및 편의성에 대한 탐구
- tailwind css 숙련도 증가

## 폴더구조

```bash
/project-root
  /public            # 정적 파일 (이미지, 폰트 등)
  /src
    /components      # 재사용 가능한 UI 컴포넌트
      /common        # 공통적으로 쓰이는 작은 단위 컴포넌트 (Button, Input 등)
      /layout        # 레이아웃 관련 컴포넌트 (Header, Footer 등)
    /styles          # 전역 및 테마 스타일
      /themes        # 테마와 관련된 SCSS 파일 (변수, 믹스인)
      /globals.scss  # 전역 스타일
    /pages           # Next.js 페이지 (라우팅 자동 설정)
    /utils           # 유틸리티 함수, 헬퍼 함수
    /hooks           # 커스텀 훅 (재사용 가능한 로직)
    /services        # API 통신 관련 파일 (Node.js, Axios 등을 이용)
  next.config.js      # Next.js 설정
  tsconfig.json       # TypeScript 설정 (Next.js에서 TypeScript 사용 시)
```

## 서버 시작

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
