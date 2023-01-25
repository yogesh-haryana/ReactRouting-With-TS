import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles({
  formcontent: {
    padding: 10,
    background: '#fff',
    width: '70%',
    boxSizing: 'border-box',
    margin: '0 auto',
    '& input': {
      fontSize: '14px',
      padding: '8px',
    },
  },
  popupheader: {
    textAlign: 'center',
    width: '100%',
    height: '40px',
    lineHeight: '2px',
  },
  formheading: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#04AA6D',
  },
  formSubHeading: {
    marginLeft: '23px',
    fontSize: '20px',
    fontWeight: 500,
    color: '#04AA6D',
  },
  formbody: {
    width: '100%',
    border: '1px solid #BAD1C2',
    borderRadius: 3,
    textAlign: 'left',
    position: 'relative',
    margin: '0 auto',
    padding: '0 5px',
  },
  inputGroups: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  inputBoxDiv: {
    justifyContent: 'space-between',
    width: '33.33%',
    '& div': {
      width: '90%',
      margin: '0 0 10px 10px',
      '& p': {
        fontSize: '1em',
      },
    },
  },
  buttonsContainer: {
    display: 'block',
    textAlign: 'right',
    '& div': {
      display: 'inline-block',
      padding: '15px',
    },
  },
  cancleBtn: {
    fontSize: '12px',
    cursor: 'pointer',
    height: '35px',
    width: '80px',
  },
  submitBtn: {
    fontSize: '12px',
    cursor: 'pointer',
    height: '35px',
    width: '80px',
  },
  errorMsg: {
    color: '#d32f2f',
    display: 'block',
  },
});

export default useStyles;
