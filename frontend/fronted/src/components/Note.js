import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id,title, content, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{title}</span>
			<span>{content}</span>
			<div className='note-footer'>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
