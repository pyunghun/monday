import all from '../css/all.css';
function LogInPage() {
    

    
    return(
        <div className="log">
            <h1>LogIn</h1>
            <label id="id"> ID : </label>
            <input type="text" placeholder="아이디를 입력하세요"/>
            <br/>
            <br/>
            <label id="pwd"> PW : </label>
            <input type="password" placeholder="비밀번호를 입력하세요"/>  
            <br/>
            <br/>
            <br/>
            <button>로그인</button>
            
        </div>
    );

}

export default LogInPage;