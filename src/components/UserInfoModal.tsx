// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(129,129,129)',
    opacity: 0.6,
    zIndex: 2,
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    background: '#fff',
    width: '400px',
    height: '350px',
    zIndex: 3,
    textAlign: 'center',
    padding: '10px',
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: '4px',
  },
  closeBtn: {
    background: 'transparent',
    position: 'absolute',
    color: 'blue',
    fontSize: '30px',
    textDecoration: 'none',
    top: '10px',
    lineHeight: 1,
    right: '15px',
    border: 'none',
    cursor: 'pointer',
    '& hover': {
      fontSize: '34px',
    },
  },

  infoHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  infoTable: {
    margin: '20px 20px 0 20px',
    textAlign: 'left',
    '& td': {
      padding: '7px',
    },
  },
})

type IProps = {
  info: {
    name: string
    email: string
    website: string
    phone: number
    company: {
      name: string
    }
    address: {
      city: string
      zipcode: number
    }
  }
  trigger: boolean,
  setTrigger: (trigger:boolean) => void,
}

const UserInfoModal = (props: IProps): JSX.Element | null => {
  const { info, trigger, setTrigger } = props
  const classes = useStyles();

  const userInfo = trigger ? (<div>
    <div className={classes.overlay} />
    <div className={classes.content}>
      <div className={classes.infoHeading}>User&apos;s Information</div>
      <table className={classes.infoTable}>
        <tbody>
          <tr>
            <td>Full Name :</td>
            <td>{info.name}</td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>{info.email}</td>
          </tr>
          <tr>
            <td>city :</td>
            <td>{info.address.city}</td>
          </tr>
          <tr>
            <td>zip code :</td>
            <td>{info.address.zipcode}</td>
          </tr>
          <tr>
            <td>Phone no. :</td>
            <td>{info.phone}</td>
          </tr>
          <tr>
            <td>website :</td>
            <td>{info.website}</td>
          </tr>
          <tr>
            <td>Company name :</td>
            <td>{info.company.name}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className={classes.closeBtn} onClick={() => setTrigger(false)}>
        ×
      </button>
    </div>
  </div>) : null
  return (
    userInfo
  )
}

// UserInfoModal.propTypes = {
//   trigger: PropTypes.bool.isRequired,
//   setTrigger: PropTypes.func.isRequired,
// }

// UserInfoModal.defaultProps = {}

export default UserInfoModal;
