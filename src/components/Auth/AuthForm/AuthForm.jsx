import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSignUp, userSignIn } from '../../../Firebase/User';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { toast } from 'react-toastify';
import icons from '../../../assets/sprite.svg';
import css from './AuthForm.module.css';

export const AuthForm = ({ onClose, isSignUp }) => {
 const navigate = useNavigate();
const [lookPassword, setLookPassword] = useState(false);
  
  

const initialValues = {
name: '',
email: '',
password: '',
};

const validationSchemaSignUp = Yup.object({
name: Yup.string().required('Name is required'),
email: Yup.string().email('Invalid email address').required('Email is required'),
password: Yup.string()
.min(8, 'Password must be at least 8 characters')
.required('Password is required'),
});

const validationSchemaLogin = Yup.object({
email: Yup.string().email('Invalid email address').required('Email is required'),
password: Yup.string().required('Password is required'),
});

const onSubmit = async (values, { setSubmitting }) => {
  
  if (isSignUp) {
    const result = await userSignUp(values);
    if (result.success) { 
      navigate('/'); 
    }
  } else {
    const result = await userSignIn(values);
    if (result.success) { 
      navigate('/teachers'); 
    }
  }
  setSubmitting(false);
};



const passwordVisible = () => {
setLookPassword(prevLookPassword => !prevLookPassword);
};

return (
<div className={css.wrapper}>
<button type="button" onClick={onClose} className={css.closeBtn}>
<svg className={css.cross}>
<use href={`${icons}#icon-cross`} />
</svg>
</button>
<h2 className={css.title}>{isSignUp ? 'Registration' : 'Login'}</h2>
<p className={css.formInfo}>
{isSignUp
? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'
: 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'}
</p>


  <Formik
    initialValues={initialValues}
    validationSchema={isSignUp ? validationSchemaSignUp : validationSchemaLogin}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form>
        {isSignUp && (
          <div>
            <label className={css.label} htmlFor="name">Name</label>
            <Field type="text" name="name" className={css.field} placeholder="Name"
             autoComplete="name"/>
            
            <ErrorMessage name="name" component="div" />
          </div>
        )}
        <div>
          <label className={css.label} htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            className={css.field}
            placeholder="Email"
            autoComplete='email'
            errors={errors ? errors.password : undefined}
            touched={touched.password ? 'true' : 'false'}
          />
          <ErrorMessage name="email" component="div" />
        </div>
        <div className={css.passwordContainer}>
          <label className={css.label} htmlFor="password">Password</label>
          <Field
            type={lookPassword ? 'text' : 'password'}
            placeholder="Password"
            className={css.field}
            name="password"
            pattern=".{8,}"
            autoComplete='password'
             errors={errors ? errors.password : undefined}
            touched={touched.password ? 'true' : 'false'}
          />
          <button type="button" className={css.passwordBtn} onClick={passwordVisible}>
            <svg className={css.passwordIcon}>
              <use href={`${icons}#icon-${lookPassword ? 'eye' : 'eye-off'}`} />
            </svg>
          </button>
          <ErrorMessage name="password" component="div" />
        </div>
        
        <button className={css.formBtn} type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </Form>
    )}
  </Formik>
</div>
);
};







