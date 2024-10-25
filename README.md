This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
