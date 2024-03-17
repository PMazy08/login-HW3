import "./Landmarkall.css";
import usersData from "../../items/Country";
import { useNavigate } from "react-router-dom";

function LandmarkallPage() {
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

        <div className="L"> 
            <div className="conL">
            {users && users.map((cty, index) => (
                <div key={index}>
                    <div className="lnm">
                        <div className="l-text" style={{width: "250px"}}>
                            <h2>{cty.name}</h2>
                            <p> - {cty.landmark}</p>
                        </div>
                        
                        <div className="l-img">
                            <img src={cty.img} alt="" />
                        </div>
                    </div>
                    {index < users.length - 1 && <hr style={{width: "500px"}} />}
                </div>
            ))}
            </div>
        </div>
        </>
     );
}

export default LandmarkallPage;