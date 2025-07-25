# Todo App Backend API

Node.js와 Express를 사용한 Todo 애플리케이션의 백엔드 API입니다.

## 기술 스택

- **Node.js** - JavaScript 런타임
- **Express.js** - 웹 프레임워크
- **MongoDB** - 데이터베이스
- **Mongoose** - MongoDB ODM
- **JWT** - 인증 토큰
- **bcrypt** - 비밀번호 해싱
- **CORS** - Cross-Origin Resource Sharing

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env` 파일을 생성하고 다음 변수들을 설정하세요:
```
MONGO_DB_PROD=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 프로덕션 서버 실행
```bash
npm start
```

## API 엔드포인트

### 인증
- `POST /api/users/register` - 사용자 등록
- `POST /api/users/login` - 사용자 로그인

### Todo 관리
- `GET /api/tasks` - 모든 Todo 조회
- `POST /api/tasks` - 새로운 Todo 생성
- `PUT /api/tasks/:id` - Todo 수정
- `DELETE /api/tasks/:id` - Todo 삭제

## 프로젝트 구조

```
backend/
├── app.js              # 메인 애플리케이션 파일
├── package.json        # 프로젝트 의존성
├── controller/         # 컨트롤러 파일들
├── model/             # 데이터 모델
├── routes/            # API 라우트
└── .ebextensions/     # AWS Elastic Beanstalk 설정
```

## 배포

이 프로젝트는 AWS Elastic Beanstalk에 배포할 수 있도록 설정되어 있습니다. 