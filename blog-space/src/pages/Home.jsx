import React from "react";
import { Link } from "react-router-dom";

function Home() {
	const posts = [
		{
			id: 1,
			title: "Google’s AI chatbot Bard makes factual error in first demo",
			desc: "On Monday, Google announced its AI chatbot Bard — a rival to OpenAI’s ChatGPT that’s due to become “more widely available to the public in the coming weeks.” But the bot isn’t off to a great start, with experts noting that Bard made a factual error in its very first demo. A GIF shared by Google shows Bard answering the question: “What new discoveries from the James Webb Space Telescope can I tell my 9 year old about?” Bard offers three bullet points in return, including one that states that the telescope “took the very first pictures of a planet outside of our own solar system.”",
			img: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		},
		{
			id: 2,
			title: "Google’s AI chatbot Bard makes factual error in first demo",
			desc: "On Monday, Google announced its AI chatbot Bard — a rival to OpenAI’s ChatGPT that’s due to become “more widely available to the public in the coming weeks.” But the bot isn’t off to a great start, with experts noting that Bard made a factual error in its very first demo. A GIF shared by Google shows Bard answering the question: “What new discoveries from the James Webb Space Telescope can I tell my 9 year old about?” Bard offers three bullet points in return, including one that states that the telescope “took the very first pictures of a planet outside of our own solar system.”",
			img: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
		},
		{
			id: 3,
			title: "Google’s AI chatbot Bard makes factual error in first demo",
			desc: "On Monday, Google announced its AI chatbot Bard — a rival to OpenAI’s ChatGPT that’s due to become “more widely available to the public in the coming weeks.” But the bot isn’t off to a great start, with experts noting that Bard made a factual error in its very first demo. A GIF shared by Google shows Bard answering the question: “What new discoveries from the James Webb Space Telescope can I tell my 9 year old about?” Bard offers three bullet points in return, including one that states that the telescope “took the very first pictures of a planet outside of our own solar system.”",
			img: "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
		},
		{
			id: 4,
			title: "Google’s AI chatbot Bard makes factual error in first demo",
			desc: "On Monday, Google announced its AI chatbot Bard — a rival to OpenAI’s ChatGPT that’s due to become “more widely available to the public in the coming weeks.” But the bot isn’t off to a great start, with experts noting that Bard made a factual error in its very first demo. A GIF shared by Google shows Bard answering the question: “What new discoveries from the James Webb Space Telescope can I tell my 9 year old about?” Bard offers three bullet points in return, including one that states that the telescope “took the very first pictures of a planet outside of our own solar system.”",
			img: "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
		},
		{
			id: 5,
			title: "Google’s AI chatbot Bard makes factual error in first demo",
			desc: "On Monday, Google announced its AI chatbot Bard — a rival to OpenAI’s ChatGPT that’s due to become “more widely available to the public in the coming weeks.” But the bot isn’t off to a great start, with experts noting that Bard made a factual error in its very first demo. A GIF shared by Google shows Bard answering the question: “What new discoveries from the James Webb Space Telescope can I tell my 9 year old about?” Bard offers three bullet points in return, including one that states that the telescope “took the very first pictures of a planet outside of our own solar system.”",
			img: "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
		},
	];

	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="img">
							<img src={post.img} alt="" />
						</div>
						<div className="content">
							<h1 className="text-5xl font-bold text-center">{post.title}</h1>
							<p className="m-5">{post.desc}</p>
							<Link className="link" to={"/post/${post.id"}>
								<div className="text-center">
									<button className="button-51">Read More</button>
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
