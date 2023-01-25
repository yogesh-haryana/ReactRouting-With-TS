import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './FormStyle';

type FormTypes = {
  id: number,
  name: string,
  username: string,
  email: string,
  website: string,
  phone: number,
  company: {
    name: string,
    catchphrase: string,
    bs: string
  },
  address: {
    city: string,
    zipcode: string;
    suite: string,
    street: string,
    geo: {
      lat: number,
      lng: number
    }
  }
}

function Form(): JSX.Element {
  const classes = useStyles();
  const {
    register, handleSubmit, resetField,
    formState: { errors },
  } = useForm<FormTypes>();

  const notify = () => toast('User Details Saved Successfully.');

  const onReset = () => {
    resetField('name');
    resetField('username');
    resetField('email');
    resetField('phone');
    resetField('website');
    resetField('company.name');
    resetField('company.catchphrase');
    resetField('company.bs');
    resetField('address.suite');
    resetField('address.street');
    resetField('address.zipcode');
    resetField('address.city');
    resetField('address.geo.lat');
    resetField('address.geo.lng');
  };

  const onSubmit = handleSubmit((data) => {
    const item = data;
    let localUserData;
    item.id = Math.floor(Math.random() * Math.random() * 100) + 1;
    const abc = localStorage.getItem('userdata');
    if (abc) {
      localUserData = JSON.parse(abc);
    } else {
      localUserData = [];
    }
    localUserData.push(item);
    localStorage.setItem('userdata', JSON.stringify(localUserData));
    onReset();
    notify();
  });

  return (
    <div>
      <div className={classes.formcontent}>
        <div className={classes.formbody}>
          <div className={classes.popupheader}>
            <p className={classes.formheading}>User Details Form</p>
          </div>
          <form name="userdataform" onSubmit={onSubmit}>
            <p className={classes.formSubHeading}>Personal Details: </p>
            <div className={classes.inputGroups}>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Name"
                  variant="outlined"
                  {...register('name', {
                    required: 'Name is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Please Enter a Valid Name',
                    },
                  })}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="UserName"
                  variant="outlined"
                  {...register('username', {
                    required: 'Username is Required',
                  })}
                  error={Boolean(errors.username)}
                  helperText={errors.username?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Email"
                  variant="outlined"
                  {...register('email', {
                    required: 'Email is Required',
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Enter a Valid email address',
                    },
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Phone Number"
                  variant="outlined"
                  {...register('phone', {
                    required: 'Phone Number is Required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter a Valid Phone Number',
                    },
                  })}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Website"
                  variant="outlined"
                  {...register('website', {
                    required: 'Web address is Required',
                    pattern: {
                      value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                      message: 'Enter a Valid Web Url',
                    },
                  })}
                  error={Boolean(errors.website)}
                  helperText={errors.website?.message}
                />
              </div>
            </div>
            <p className={classes.formSubHeading}>Company: </p>
            <div className={classes.inputGroups}>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Name"
                  variant="outlined"
                  {...register('company.name', {
                    required: 'Company Name is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid name',
                    },
                  })}
                  error={Boolean(errors.company?.name)}
                  helperText={errors.company?.name?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Bs"
                  variant="outlined"
                  {...register('company.bs', {
                    required: 'Bs is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid bs.',
                    },
                  })}
                  error={Boolean(errors.company?.bs)}
                  helperText={errors.company?.bs?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Catch Phrase"
                  variant="outlined"
                  {...register('company.catchphrase', {
                    required: 'Catch Phrase is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid Catch Phrase',
                    },
                  })}
                  error={Boolean(errors.company?.catchphrase)}
                  helperText={errors.company?.catchphrase?.message}
                />
              </div>
            </div>
            <p className={classes.formSubHeading}>Address: </p>
            <div className={classes.inputGroups}>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Street"
                  variant="outlined"
                  {...register('address.street', {
                    required: 'Street is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid street',
                    },
                  })}
                  error={Boolean(errors.address?.street)}
                  helperText={errors.address?.street?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Suite"
                  variant="outlined"
                  {...register('address.suite', {
                    required: 'Suite is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid suite.',
                    },
                  })}
                  error={Boolean(errors.address?.suite)}
                  helperText={errors.address?.suite?.message}

                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="City"
                  variant="outlined"
                  {...register('address.city', {
                    required: 'City is Required',
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: 'Enter a valid city.',
                    },
                  })}
                  error={Boolean(errors.address?.city)}
                  helperText={errors.address?.city?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="Zipcode"
                  variant="outlined"
                  {...register('address.zipcode', {
                    required: 'Zipcode is Required',
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: 'Enter a valid zipcode.',
                    },
                  })}
                  error={Boolean(errors.address?.zipcode)}
                  helperText={errors.address?.zipcode?.message}
                />
              </div>
            </div>
            <p className={classes.formSubHeading}>Geo: </p>
            <div className={classes.inputGroups}>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="lat"
                  variant="outlined"
                  {...register('address.geo.lat', {
                    required: 'Latitude is Required',
                    pattern: {
                      value: /^\d*\.?\d*$/,
                      message: 'Enter a valid geo latitude.',
                    },
                  })}
                  error={Boolean(errors.address?.geo?.lat)}
                  helperText={errors.address?.geo?.lat?.message}
                />
              </div>
              <div className={classes.inputBoxDiv}>
                <TextField
                  placeholder="lng"
                  variant="outlined"
                  {...register('address.geo.lng', {
                    required: 'Longitude is Required',
                    pattern: {
                      value: /^\d*\.?\d*$/,
                      message: 'Enter a valid geo longitude.',
                    },
                  })}
                  error={Boolean(errors.address?.geo?.lng)}
                  helperText={errors.address?.geo?.lng?.message}
                />
              </div>
            </div>
            <div className={classes.buttonsContainer}>
              <div>
                <Button variant="outlined" className={classes.cancleBtn} onClick={onReset}>Reset</Button>
              </div>
              <div>
                <Button type="submit" variant="contained" className={classes.submitBtn}>Submit</Button>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Form;
