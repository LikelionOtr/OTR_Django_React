import './Login.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Login extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/users/login/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                    <div className='login-form'>
                    <div className='text'>이메일</div>
                    <form>
                        <input type="email" name="email" class="text-field" placeholder="이메일">{item.email}</input>
                        <br></br>
                        <br></br>
                    </form>
                    <div className='text'>비밀번호</div>
                    <form>
                        <input type="password" name="password" class="text-field" placeholder="비밀번호">{item.password}</input>
                        <br></br>
                        <br></br>
                        <Link to = "/loginedHome"><input type="submit" value="로그인" class="submit-btn"></input></Link>
                    </form>
        
                    <div class="links">
                        <a href="#">비밀번호를 잊으셨나요?</a>
                    </div>
        
                    <hr></hr>
                    <a target="_blank" href="https://www.kakaocorp.com/page/">
                        <img className="sns" alt="kakao login" src="img/kakao_login.png" />
                    </a>
                    <a target="_blank" href="https://www.naver.com/">
                        <img className="sns" alt="naver login" src="img/naver_login.png" />
                    </a>    
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default Login;