import "./Userall.css";
import usersData from "../../items/Users";
import { useNavigate } from "react-router-dom";

function UserallPage() {
    const navigate = useNavigate();
    const type = localStorage.getItem("type");
    let users;

    if (type === "admin") {
        users = usersData; 
    }
    
    return ( 
        <>
        <div className="navbarU">
            <div onClick={() => navigate("/home")}>
                <h2 style={{color: "#fff01f", marginLeft: "15px"}}>&lt;&lt; BACK</h2>
            </div>
        </div>

        <div className="U"> 
            <div className="grid-container">
                {users && users.map((user) => ( 
                    <div className="grid-item" key={user.username}>
                        <img style={{width: "200px", height: "300px", borderRadius: "7px"}} src={user.avatar} alt="" />
                        <p className="title">{user.name} <p style={{fontSize: "20px"}}>({user.type})</p> <br /> <p style={{fontSize: "15px"}}>{user.country}</p> </p>
                    </div>
                ))}
            </div>
        </div>
        
        </>
     );
}

export default UserallPage;
