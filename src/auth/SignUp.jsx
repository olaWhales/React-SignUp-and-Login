import  {React, useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link, useNavigate} from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const userDetails = {
        userName: "",
        email: "",
        password: "",
    };

        const [data, setData] = useState(userDetails)

        function handleChange(event){
            const {name, value} = event.target;
            // setData((prevData)=>({...prevData, [name]:value}));
            setData((prevData)=>{
                return {...prevData, [name]: value}
            });
        };

        const handleSubmit = ()=>{
          console.log("Submited ..........")
          // setTimeout(()=> {
            navigate("/login");
          // },4000)
        }
        console.log(data)



  return (
    <div className="main">
      <form onSubmit={handleSubmit} action="">
        <div>
          <input
            type="text"
            name="userName"
            placeholder="Enter userName"
            className={style.input}
            onChange={handleChange}
            // value={data.userName}
            required
          />
        </div>
        <div>
          <input
            type="text"
            email="email"
            placeholder="Enter email"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="psw"
            password="password"
            placeholder="Enter password"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style={style.btn} type="Submit" textContent="Submit" />
      </form>
      <div className={style.existUser}>
        <span>Already have an account? </span>
        <span>
          <Link to={"/login"}>Login</Link>
        </span>
      </div>
    </div>
  );
};
export default SignUp;





