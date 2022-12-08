import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [title, setTitle] = useState('');
	const characterLimit = 200;
	const [content,setContent] = useState('');

	const handleSaveClick = () => {
		if ((content.trim().length > 0)&&(title.trim().length > 0)) {
			handleAddNote([title,content]);
			setTitle('');
			setContent('');
		}
	};

	return (
		<div className='note new'>
			<input value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={content}
				onChange={(e)=>{setContent(e.target.value)}}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - content.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
