import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { auth, google_signin, login } from "../../firebase/auth";

const Login = () => {
	const navigate = useNavigate()
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	useEffect(() =>{
		const user = auth.currentUser;
		if(user){
			navigate('/reports')
		}else
			console.log("NULL")
	})

	const loginResponse = async (type) => {
		if(type=='oauth'){
			const response = await google_signin()
			navigate('/reports')
		}else{
			const response = await login(data)
			navigate('/reports')
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}
								onClick={()=>{loginResponse('login')}}>
							sign In
						</button>
						<button type="submit" className={styles.green_btn} 
								onClick={()=>{loginResponse('oauth')}}>
							Google
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
