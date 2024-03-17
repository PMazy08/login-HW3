import "./Home.css"
import user from "../../items/Users";
import landmark from "../../items/Country";
import logout from "../../assets/logout-circle-r-line.png"
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    
    // เข้าถึงข้อมูลของผู้ใช้ที่มีชื่อ "Groot"
    const userdata = user.find(user => user.username === username);

    const userlandmark = landmark.find(landmark => landmark.name === userdata?.country)

    // เข้าถึงข้อมูลสถานที่สำคัญในประเทศ
    // const landmarks = userdata && userdata.country ? users.landmarks[userdata.country as keyof typeof users.landmarks] : [];

    const utype = `${userdata?.type}`;

    function logOut(){
        if (confirm('Do you want to log out?')) {
            localStorage.clear();
            navigate("/");

          }
    }

    return ( 
        <>
        <div className="navbar">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Guardians_of_the_Galaxy-Logo_%28cropped%29.png" alt="" />
            </div>

            <div className="btn-local">
                {utype === "admin" && (  // ใช้เงื่อนไข type เพื่อตรวจสอบว่าเป็น admin หรือไม่
                    <>  {/* ใช้ Fragment เพื่อเปิดและปิด JSX */}
                        <div className="us" onClick={() => navigate("/user")}>
                            <button>Users</button>
                        </div>
                        <div className="lm" onClick={() => navigate("/landmark")}>
                            <button>Landmarks</button>
                        </div>
                    </>
                )}
                <div className="logout" onClick={logOut}>
                    <img src={logout} alt="" />
                    
                </div>
            </div>
        </div>

        <div className="bo-dy">
            <div className="cont">
                <div className="d1">
                    <div className="lnm-u2">
                        <img src={userdata?.avatar} alt="" />
                    </div>
                    <div className="d2">
                        <h1>{userdata?.name}</h1>
                        <p>Contry: {userdata?.country}</p>
                        <p>landmark: {userlandmark?.landmark}</p>
                        <img className="lnm-u" src={userlandmark?.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default HomePage;