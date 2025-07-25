const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, {timestamps: true});

// methods는 몽구스 모델에 함수를 추가하는데 사용되는 속성이다. methods를 사용해 스키마 내부에 함수를 정의하면 좋은점은 스키마로 생성된 데이터 값으로 해당 함수를 호출해서 쓸 수 있다.

UserSchema.methods.createToken = async function() {
  return jwt.sign({id: this._id}, JWT_SECRET, {expiresIn: '1h'});
}

UserSchema.methods.toJSON = function() {
  const user = this._doc;
  delete user.password; 
  delete user.__v;
  return user;
}

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;

