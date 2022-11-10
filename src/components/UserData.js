import React, { useState, useEffect } from 'react';
import {
  Table, TableContainer, TableRow, TableCell, TableBody, TableHead,
} from '@mui/material';
import axios from 'axios';
import UserInfoModal from './UserInfoModal';

function UserData() {
  const [details, setDetails] = useState([]);
  const [errorMsg, setMsg] = useState('');
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [userDetails, setuserDetails] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setDetails(response.data);
      })
      .catch(() => {
        setMsg('cannot retrieve User-Data');
      });
  }, []);

  return (
    <div className="mainWrapper">
      <TableContainer className="tableContainer">
        <Table className="UserTable">
          <caption>A basic table with user Data from remote API</caption>
          <TableHead>
            <TableRow>
              <TableCell>FullName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>More Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              details.length && details.map((detail) => (
                <TableRow key={detail?.id}>
                  <TableCell>{detail?.name}</TableCell>
                  <TableCell>{detail?.email}</TableCell>
                  <TableCell>{detail?.address?.city}</TableCell>
                  <TableCell>
                    <button
                      type="button"
                      className="clickhere"
                      onClick={
                        () => setuserDetails(detail, setButtonPopUp(true))
                      }
                    >
                      Click Here
                    </button>
                  </TableCell>
                </TableRow>
              ))
            }
            {
              (errorMsg) && <div id="errorMsg">{errorMsg}</div>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <UserInfoModal info={userDetails} trigger={buttonPopUp} setTrigger={setButtonPopUp} />
    </div>
  );
}

export default UserData;
