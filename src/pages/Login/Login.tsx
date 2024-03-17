import {useEffect, useRef} from "react";
import "./Login.css"

import users from "../../items/Users"
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

function LoginPage() {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
        //   localLogin();
            navigate("/home");
        }
      },[]);

    function handleLogin() {
        const username = usernameRef.current!.value;
        const password = passwordRef.current!.value;

        // ค้นหาผู้ใช้ที่มี username และ password ตรงกับที่ผู้ใช้ป้อนเข้ามา
        const user = users.find((user) => user.username === username && user.password === password);
    
        if (user) {
            localStorage.setItem("username", user.username);
            hashPassword(user.password);
            localStorage.setItem("type", user.type);
            
            if(user.type === "admin"){
                console.log("yes admin");
                navigate("/home");  
            }else{
                console.log("is user");
                navigate("/home");
            }
        } else {
            alert("Invalid username or password!");

        }
    }

    const saltRounds = 10; // You can adjust the number of salt rounds as needed

    const hashPassword = async (password: string): Promise<string> => {
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            // console.log(hashedPassword);
            localStorage.setItem("password", hashedPassword);
            return hashedPassword;
        } catch (error) {
            // Handle error
            console.error('Error hashing password:', error);
            throw error;
        }
    };


    return ( 
        <>
        <div className="body">
            <div className="boxLog">
                <div className="boxL">
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <img style={{width: "250px", marginTop: "20px"}} src="https://upload.wikimedia.org/wikipedia/commons/2/21/Guardians_of_the_Galaxy-Logo_%28cropped%29.png" alt="" />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Username" ref={usernameRef} />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" ref={passwordRef}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleLogin(); 
                            }
                          }}
                        />
                    </div>
                    <div className="button-box">
                        <button onClick={handleLogin} type="submit">Login</button>  
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default LoginPage;