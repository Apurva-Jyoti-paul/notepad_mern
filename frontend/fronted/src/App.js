import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	const callData = useCallback(async () => {
		const res = await fetch('/notes', {
			method: 'get',
			headers: { 'Content-Type': 'application/json' },
		});
		//console.log(await res.json());
		const Data = await res.json()
		setNotes(Data);
	})
	useEffect(() => { callData()},[callData])

	const addNote = (text) => {
		fetch('/notes', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				"title": text[0],
				"content": text[1]
			})
		});
	};

	const deleteNote = async (id) => {
		const res= await fetch(`/notes/${id}`, {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
		});
		console.log(res);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<NotesList
					notes={notes.filter((note) =>
						note.title.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
