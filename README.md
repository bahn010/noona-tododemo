# Todo App - Full Stack Project

React 프론트엔드와 Node.js 백엔드로 구성된 완전한 Todo 애플리케이션입니다.

## 🚀 프로젝트 구조

```
todoapp/
├── frontend/          # React 프론트엔드
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js 백엔드 API
│   ├── controller/
│   ├── model/
│   ├── routes/
│   └── app.js
└── README.md
```

## 🛠 기술 스택

### Frontend
- **React** - 사용자 인터페이스
- **Bootstrap** - 스타일링
- **React Router** - 라우팅
- **Axios** - HTTP 클라이언트

### Backend
- **Node.js** - JavaScript 런타임
- **Express.js** - 웹 프레임워크
- **MongoDB** - 데이터베이스
- **Mongoose** - MongoDB ODM
- **JWT** - 인증 토큰
- **bcrypt** - 비밀번호 해싱
- **CORS** - Cross-Origin Resource Sharing

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/bahn010/noona-tododemo.git
cd noona-tododemo
```

### 2. Backend 설정
```bash
cd backend
npm install
```

환경 변수 설정 (`.env` 파일 생성):
```
MONGO_DB_PROD=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

백엔드 서버 실행:
```bash
npm run dev    # 개발 모드
npm start      # 프로덕션 모드
```

### 3. Frontend 설정
```bash
cd frontend
npm install
```

프론트엔드 실행:
```bash
npm start
```

## 🌐 API 엔드포인트

### 인증
- `POST /api/users/register` - 사용자 등록
- `POST /api/users/login` - 사용자 로그인

### Todo 관리
- `GET /api/tasks` - 모든 Todo 조회
- `POST /api/tasks` - 새로운 Todo 생성
- `PUT /api/tasks/:id` - Todo 수정
- `DELETE /api/tasks/:id` - Todo 삭제

## 🔧 주요 기능

- ✅ 사용자 인증 (회원가입/로그인)
- ✅ Todo CRUD 작업
- ✅ JWT 토큰 기반 인증
- ✅ 반응형 웹 디자인
- ✅ 실시간 데이터 동기화

## 📱 사용법

1. **회원가입/로그인**: 사용자 계정 생성 및 로그인
2. **Todo 추가**: 새로운 할 일 추가
3. **Todo 수정**: 기존 할 일 내용 수정
4. **Todo 완료**: 할 일 완료 체크
5. **Todo 삭제**: 불필요한 할 일 삭제

## 🚀 배포

### Frontend
- Netlify를 통한 배포 지원
- `netlify.toml` 설정 파일 포함

### Backend
- AWS Elastic Beanstalk 배포 지원
- `Procfile` 및 `.ebextensions` 설정 포함

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👨‍💻 개발자

- **GitHub**: [bahn010](https://github.com/bahn010)
- **Repository**: [noona-tododemo](https://github.com/bahn010/noona-tododemo) 