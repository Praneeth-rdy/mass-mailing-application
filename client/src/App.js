// import logo from './logo.svg';
import React from 'react';
import { TextField, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from './components/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  multilineTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80vw',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Layout>
      <div>
        <form>
          <div className={classes.root}>
            <div>
              <TextField
                label="Subject"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText=""
                margin="normal"
                variant="outlined"
              />
              {/* <TextField
                label="Email"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText=""
                margin="normal"
                variant="outlined"
              /> */}
              <Input
                type='file'
                label='sheet'
                disableUnderline={true}
                style={{ margin: 24 }} />
            </div>
            <div>
              <TextField
                label="Message"
                id="outlined-margin-normal"
                className={classes.multilineTextField}
                helperText=""
                margin="normal"
                variant="outlined"
                multiline
                rows={3}
              />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default App;
