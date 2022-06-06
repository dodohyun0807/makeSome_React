import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/video_list/video_list";

function App() {
	const [videos, setvideos] = useState([])

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		}

		fetch(
			'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDQXYg0-yzGfO-uRF3j3yv0uJAcKFfOkwQ',
			requestOptions
		)
			.then(res => res.json())
			.then(result => setvideos(result.items))
			.catch(err => console.log('error', err))
	}, [])

	return (
		<>
			<h1>hello!</h1>
			<VideoList video={videos} />
		</>
	)
}

export default App;
