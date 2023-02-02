import React from "react";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="auth">
			<div class="w-full max-w-lg">
				<h2 className="text-3xl font-sans font-bold text-green-800 text-center py-3">
					Login
				</h2>
				<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="username"
						>
							Username
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="username"
						/>
					</div>
					<div class="mb-6">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="password"
						>
							Password
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="password"
						/>
					</div>
					<div class="flex items-center justify-between">
						<button
							class="bg-slate-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
						>
							Sign In
						</button>
						<span className="text-md ml-6">
							Don't have an account?{" "}
							<Link className="text-blue-400" to="/register">
								Register
							</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
