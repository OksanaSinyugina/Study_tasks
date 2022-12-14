import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript 1', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description'},
		{id: 3, title: 'JavaScript 3', body: 'Description'},
	])

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: Date.now(),
			title,
			body
		}
		setPosts([...posts, newPost])
		setTitle("")
		setBody("")
	}

	return (
		<div className="App">
			<form>
				<MyInput 
					value={title}
					onChange={e => setTitle(e.target.value)}
					type="text" 
					placeholder="title"
				/>
				<MyInput 
					value={body}
					onChange={e => setBody(e.target.value)}
					type="text" 
					placeholder="description" 
				/>
				<MyButton onClick={addNewPost}>Create Post</MyButton>
			</form>
			<PostList posts={posts} title="Posts about JS"/>
		</div>
	);
}

export default App;
