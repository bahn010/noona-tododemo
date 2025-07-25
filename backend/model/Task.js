const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;

// 백엔드에서 DB를 생성하는 역할을 한다.
// MONGODB에서 NOSQL의 단점을 보완할 수 있는 MONGOOSE를 사용한다.
// 칼럼과 데이터 타입 및 필수 조건 등을 정의하여, Task라는 모델을 생성한다. 이때 Task라는 모델은 테이블과 같다.