import React from "react";

function Single() {
	return (
		<div className="single">
			<div className="content">
				<img
					className="samples"
					src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
					alt=""
				/>
				<div className="user">
					<img
						className="w-10 h-10"
						src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
						alt=""
					/>
					<div className="info">
						<span>John</span>
					</div>
					<p>Posted 2 days ago</p>
				</div>
			</div>
			<div className="menu">m</div>
		</div>
	);
}

export default Single;
