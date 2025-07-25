const express = require('express');
const router = express.Router();
const taskApi = require('./task.api');
const userApi = require('./user.api');

router.use('/tasks', taskApi); // tasks로 요청이 들어온 것에 대하여 task.api.js 파일에서 처리한다.
router.use('/user', userApi); // user로 요청이 들어온 것에 대하여 user.api.js 파일에서 처리한다.

module.exports = router;

// 백엔드를 구현함에 있어서 먼저 해야할 것은 route를 설정하는 것이다. (라우팅)
// 라우팅은 클라이언트가 요청한 것에 대해 어디로 보내서(엔드 포인트) 처리할지 결정하는 것이다.
// 여기에 모든 라우팅과 그에 대한 처리를 정의하여도 되나, 큰 프로젝트로 갈수록 다양한 기능을 담당하는 라우팅이 생기게 되고 이러한 경우에는 한 파일에 모든 라우팅을 정의하면 유지 보수가 어려워진다.
// 따라서 지금처럼 할일을 만들고, 읽고, 업데이트하고, 지우는 기능을 하는 task.api.js 파일을 만들어 놓고 이를 분리하여 관리한다.
// 또한 유저 정보를 만들고, 읽고, 업데이트하고, 지우는 기능을 하는 user.api.js 파일을 만들어 놓고 이를 분리하여 관리한다.
