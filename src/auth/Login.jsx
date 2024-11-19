import { React, useState } from "react";
import style from "../styles/Login.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link } from "react-router-dom";

const Login = () => {
    const loginDetails ={
        email: "" ,
        password: "",
    };

    const [data, setData] = useState(loginDetails);

        function handleChange(event){
          const { name, value } = event.target;
          // setData((prevData)=>({...prevData, [name]:value}));
          setData((prevData) => {
            return {...prevData, [name]: value };
          });
        }
        console.log(data);    
    

  return (
      <form action="">
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
        <CustomButton style={style.btn} type="Submit" textContent="login" />
      </form>

  );
};
export default Login;
