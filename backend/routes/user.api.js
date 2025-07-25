const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller'); // 유저 컨트롤러 파일을 불러온다.


router.post('/', userController.createUser); // 회원가입 엔드포인트

router.post('/login', userController.loginUser); // 로그인 엔드포인트


module.exports = router;

// user로 요청이 들어온 것에 대하여 이 파일에서 어떻게 처리할지 결정한다.
// 여기서 어떻게 처리할지 상세히 기재하여도 되나, 별도로 controller 파일을 만들어 놓고 이를 분리하여 관리한다.
// 이 파일에서는 라우팅만 담당하고, 실제 처리는 controller 파일에서 담당한다.
// 이렇게 하면 라우팅과 처리를 분리하여 관리할 수 있고, 유지 보수가 용이하다.