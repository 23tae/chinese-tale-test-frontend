# 🎭 나와 닮은 중국 고전 속 인물 찾기

![Preview](/assets/thumbnail.jpg)

## 📖 소개

중국 고전 문학 작품 속 인물들과 사용자의 성격을 매칭해주는 웹 애플리케이션입니다.  
목란사, 진향련, 섭소천 등 중국 고전 문학 6편에 등장하는 16인의 인물들 중 사용자와 가장 잘 맞는 캐릭터를 선정합니다.

### ✨ 주요 기능

- 🤖 성격 분석 및 캐릭터 매칭
- 📝 개인화된 결과 스토리텔링
- 🎬 관련 미디어 소개
- 🔗 공유 기능

## 🛠 기술 스택

- **Frontend**: Next.js 14 (App Router)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS
- **State Management**: Zustand

## 🏃‍♂️ 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🌐 환경 변수 설정

`.env` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_BACKEND_PROTOCOL=your_backend_protocol
NEXT_PUBLIC_BACKEND_HOST=your_backend_host
NEXT_PUBLIC_BACKEND_PORT=your_backend_port
```

## 📂 프로젝트 구조

```
chinese-tale-test-frontend/
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── icon.ico
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── test
│   │       ├── page.tsx
│   │       ├── questions
│   │       │   ├── layout.tsx
│   │       │   └── page.tsx
│   │       └── result
│   │           ├── layout.tsx
│   │           └── page.tsx
│   ├── components
│   │   ├── Progress.tsx
│   │   ├── Question.tsx
│   │   └── result
│   │       └── ResultActions.tsx
│   ├── config.ts
│   ├── lib
│   │   ├── api.ts
│   │   ├── store.ts
│   │   └── types.ts
│   └── utils
├── tailwind.config.ts
└── tsconfig.json
```
