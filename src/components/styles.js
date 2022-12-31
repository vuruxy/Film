import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	root:
	{
		display: 'flex',
		hiehgt: '100%',
	},
	toolbar: {
		height: '70px',
	},
	content: {
		flexGrow: 1,
		padding: '2em',

	},
}));