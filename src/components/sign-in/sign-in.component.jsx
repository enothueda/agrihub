import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth'

import './sign-in.styles.scss';

const SignIn = () => {
    const [credentials, setCredentials] = useState({email: '', password: ''});
    
    const { email, password } = credentials;

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setCredentials({email: '', password: ''})
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({...credentials, [name]: value});        
    }

    return (
        <div className='sign-in'>
            <h2>Ya tengo cuenta</h2>
            <span>Ingresa con tu email </span>

            <form onSubmit={handleSubmit} >
                <FormInput 
                    name='email' 
                    type='email' 
                    label='Email'
                    value={email} 
                    handleChange={handleChange} 
                    required 
                />               
                <FormInput 
                    name='password' 
                    type='password' 
                    label='Password'
                    value={password} 
                    handleChange={handleChange} 
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;