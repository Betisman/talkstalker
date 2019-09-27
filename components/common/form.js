import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextField, TextFieldProps, Select, Switch } from 'formik-material-ui';

const ranges = [
  {
    value: '---',
    label: 'Work-shop'
  },
  {
    value: '< 20 min',
    label: 'Light talk'
  },
  {
    value: '> 20 min',
    label: 'Long talk'
  }
];

const UppercasingTextField = props => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      const { value } = event.target;
      props.form.setFieldValue(props.field.name, value ? value.toUpperCase() : '');
    }}
  />
);

const FormCallForPapers = () => {
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        select: 'none',
        tags: [],
        rememberMe: true
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ submitForm, isSubmitting, values, setFieldValue }) => (
        <Form>
          <Field name="email" type="email" label="Email" component={UppercasingTextField} />
          <br />
          <Field type="name" label="Name" name="name" component={TextField} />
          <br />
          <Field type="name" label="Talk description" name="description" component={MuiTextField} />
          <br />
          <Field
            type="text"
            name="select"
            label="Type talk"
            select
            helperText="Please select Range"
            margin="normal"
            component={TextField}
            InputLabelProps={{
              shrink: true
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
          <br />
          <FormControl>
            <InputLabel shrink htmlFor="tags">
              Tags
            </InputLabel>
            <Field
              type="text"
              name="tags"
              component={Select}
              multiple
              inputProps={{ name: 'tags', id: 'tags' }}
            >
              <MenuItem value="dogs">Front-end</MenuItem>
              <MenuItem value="cats">Back-end</MenuItem>
              <MenuItem value="rats">Devops</MenuItem>
            </Field>
          </FormControl>
          <br />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    />
  );
};

export default FormCallForPapers;
