
import  { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true); 

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
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please repeat your password'),
  });

  const validationSchemaLogin = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleFormToggle = () => {
    setIsSignUp(prevState => !prevState);
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <h2>{isSignUp ? 'Registration' : 'Login'}</h2>
          <p>{isSignUp ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'
              : 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'}</p>
      
      <Formik
        initialValues={initialValues}
        validationSchema={isSignUp ? validationSchemaSignUp : validationSchemaLogin}
        onSubmit={onSubmit}
      >
        <Form>
          {isSignUp && (
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
          )}

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          

          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </Form>
      </Formik>

      <p>
        {isSignUp
          ? "Already have an account? "
          : "Don't have an account yet? "}
        <button type="button" onClick={handleFormToggle}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

 





// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import icons from '../../../assets/sprite.svg';
// import css from './AuthForm.module.css';

// export const AuthForm = ({ formType, onClose }) => {
//     const [lookPassword, setLookPassword] = useState(false);

//     const passwordVisible = () => {
//         setLookPassword(prevLookPassword => !prevLookPassword);
//     };

//     const isRegistration = formType === 'register';

//     const validationSchema = Yup.object({
//         name: isRegistration ? Yup.string().required('Name is required') : Yup.string(),
//         email: Yup.string()
//             .email('Invalid email address')
//             .required('Email is required'),
//         password: Yup.string()
//             .min(8, 'Password must be at least 8 characters')
//             .required('Password is required'),
//     });

//     const initialValues = {
//         name: '',
//         email: '',
//         password: '',
//     };

//     const handleSubmit = (values, { setSubmitting }) => {
//         const { name, email, password } = values;
//         if (isRegistration && (!name || !email || !password)) {
//             return toast.error('All fields are required for registration');
//         }
//         if (!isRegistration && (!email || !password)) {
//             return toast.error('All fields are required for login');
//         }
//         setSubmitting(false);
//         toast.success(
//             isRegistration ? 'You have successfully registered' : 'You have successfully logged in'
//         );
//     };

//     return (
//         <div className={css.wrapper}>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >
//                 {({
//                     values,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                 }) => (
//                     <Form onSubmit={handleSubmit} className={css.AuthForm}>
//                         <button className={css.iconClose} onClick={onClose} type="button">
//                             <svg width={20} height={20}>
//                                 <use xlinkHref={`${icons}#icon-cross`}></use>
//                             </svg>
//                         </button>
//                         <h2>{isRegistration ? 'Registration' : 'Login'}</h2>
//                         <p>
//                             {isRegistration
//                                 ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.'
//                                 : 'Welcome back! Please enter your credentials to access your account and continue your search for a teacher.'
//                             }
//                         </p>
//                         {isRegistration && (
//                             <div>
//                                 <label className="form__label" htmlFor="name">Name</label>
//                                 <Field
//                                     className="form__input"
//                                     type="text"
//                                     name="name"
//                                     id="name"
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.name}
//                                 />
//                                 <ErrorMessage name="name" component="div" className="form__error" />
//                             </div>
//                         )}
//                         <div>
//                             <label className="form__label" htmlFor="email">Email</label>
//                             <Field
//                                 className="form__input"
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.email}
//                             />
//                             <ErrorMessage name="email" component="div" className="form__error" />
//                         </div>
//                         <div>
//                             <label className="form__label" htmlFor="password">Password</label>
//                             <Field
//                                 className="form__input"
//                                 type={lookPassword ? 'text' : 'password'}
//                                 name="password"
//                                 id="password"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.password}
//                             />
//                             <ErrorMessage name="password" component="div" className="form__error" />
//                             <button
//                                 className="form__password-visibility"
//                                 onClick={passwordVisible}
//                                 type="button"
//                                 title="Password visibility"
//                             >
//                                 <svg>
//                                     <use xlinkHref={`${icons}#icon-eye-off`} />
//                                 </svg>
//                             </button>
//                         </div>
//                         <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className="form__button"
//                         >
//                             {isRegistration ? 'Sign Up' : 'Login'}
//                         </button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };



