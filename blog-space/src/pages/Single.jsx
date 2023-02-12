import React from "react";
import { VscEdit } from "react-icons/vsc";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Single() {
	return (
		<div className="single">
			<div className="content">
				<img
					className="samples"
					src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29tZW9uZSUyMHN0dWR5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
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
				<div className="edit">
					<Link to={`/write?edit=2`}>
						<VscEdit />
					</Link>
					<MdOutlineDeleteOutline />
				</div>
				<div className="text-container">
					<h1 className="text-4xl font-bold m-2 mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
					<p className="m-2 .leading-relaxed mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
						vitae ratione blanditiis accusamus! In ipsum excepturi aliquam quos
						dicta? Magni veniam, commodi consequuntur tempora voluptas quidem
						dignissimos sapiente ipsa.
					</p>
					<p className="m-2 .leading-relaxed mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
						vitae ratione blanditiis accusamus! In ipsum excepturi aliquam quos
						dicta? Magni veniam, commodi consequuntur tempora voluptas quidem
						dignissimos sapiente ipsa.
					</p>
					<p className="m-2 .leading-relaxed mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
						vitae ratione blanditiis accusamus! In ipsum excepturi aliquam quos
						dicta? Magni veniam, commodi consequuntur tempora voluptas quidem
						dignissimos sapiente ipsa.
					</p>
					<p className="m-2 .leading-relaxed mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
						vitae ratione blanditiis accusamus! In ipsum excepturi aliquam quos
						dicta? Magni veniam, commodi consequuntur tempora voluptas quidem
						dignissimos sapiente ipsa.
					</p>
				</div>
			</div>
			<div className="menu">m</div>
		</div>
	);
}

export default Single;
