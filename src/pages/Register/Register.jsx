import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';

const Register = () => {
  const [error, setError] = useState('')
  const [succes, setSucces] = useState('')
    const {createUser, google} = useContext(AuthContext);
    const handleGoogleSign = () =>{
        google()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error);
        })
   }
  
    const handleRegister = (e) =>{
         e.preventDefault()
         const form = new FormData(e.currentTarget)
         const name = form.get('name');
         const photo = form.get('photo_url');
         const email = form.get('email');
         const password = form.get('password');
         console.log(email, password);
        
         setError('')
         setSucces('')
         if (password.length < 6) {
            setError('Password need to minimum 6 character or more')
            return;
         }else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).+$/.test(password))  {
            setError('you have to use a capital latter and a special character')
         }

         createUser(email, password, name, photo)
         .then(result =>{
            console.log(result.user)
            setSucces('User Created Succsessfully')
         })
         .catch(error =>{
            console.log(error.message);
            setError(error.message)
         })
    }
    return (
        <>
              <section className="" >
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full bg-sky-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Register your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                      <input type="text" name="name" id="name" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jhon Dev" required=""/>
                  </div>
                  <div>
                      <label htmlFor="photo_url" className="block mb-2 text-sm font-medium text-gray-900 ">Your Photo Url</label>
                      <input type="text" name="photo_url" id="photo_url" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photo_url" required=""/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                     
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                  <p className='text-center'>or</p>
                  <div className='text-center'>

                  <button onClick={handleGoogleSign} className='btn bg-white mx-auto'>Sign With Google</button>
                  </div>
                  <p className="text-sm font-light text-white ">
                      If you have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
                  </p>
              </form>
              <div>
                <h3 className='text-center font-bold text-red-500'>{error}</h3>
                <h3 className='text-center font-bold text-green-500'>{succes}</h3>
              </div>
          </div>
      </div>
  </div>
</section>
        </>
    );
};

export default Register;