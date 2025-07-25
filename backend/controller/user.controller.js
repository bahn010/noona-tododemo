const Users = require('../model/users');
const bcrypt = require('bcrypt'); 
// 회원가입시 user가 입력한 비밀번호에 대해 hashing을 하기 위해 사용. 이렇게 해야 DB접근권한이 있는 사람도 해당 사람이 어떤 비밀번호를 설정한 것인지 알수 없다.
const saltRounds = 10;
// 소금을 몇번치냐에 따라 HASHING 된 비밀번호의 길이가 달라진다.

const userController = {};

userController.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await Users.findOne({email});
        if(user) {
            return res.status(400).json({status: "error", message: "User already exists"});
        }
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new Users({ name, email, password: hashedPassword });   
        await newUser.save();
        res.status(200).json({status: "success", data: newUser});
    } catch (error) {
        res.status(400).json({status: "error", message: error});
    }
}

userController.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({status: "error", message: "이메일과 비밀번호를 모두 입력해주세요."});
        }
        
        const user = await Users.findOne({email});  
        
        if(!user) {
            return res.status(400).json({status: "error", message: "존재하지 않는 아이디입니다."});
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // 클라이언트에서 입력된 비밀번호와 해시된 비밀번호를 비교하여 일치하는지 확인한다.
        if(!isPasswordValid) {
            return res.status(400).json({status: "error", message: "비밀번호가 일치하지 않습니다."});
        }
        
        const token = await user.createToken();
        // 로그인이 성공하면 환경변수에서 설정된 TOKEN을 부여하여, 클라이언트에서 사용할 수 있도록 한다.
        // 해당 토큰이 존재하면, 다시 페이지에 접속해도 재로그인을 하지 않아도 된다.
        res.status(200).json({status: "success", data: {user, token}});

        
        
    } catch (error) {
        res.status(400).json({status: "error", message: error.message || error});
    }
}

userController.getUser = async (req, res) => {
    try {
        const userId = req.userId; // 여기서 userID를 어떻게 받아올 수 있을까? -> 미들웨어 활용 필요(next() 활용)
        const user = await Users.findById(userId)
        res.status(200).json({status: "success", data: user});
    } catch (error) {
        res.status(400).json({status: "error", message: error.message || error});
    }
}

module.exports = userController;