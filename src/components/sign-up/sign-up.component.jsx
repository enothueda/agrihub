import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import './sign-up.sytles.scss';

const SignUp = () => {
    const [newUser, setNewUser] = useState({
        displayName: '',
        email:'',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = newUser;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("contraseñas no coinciden")
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
            createUserProfileDocument(user, { displayName });
            setNewUser({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setNewUser({...newUser, [name]: value });        
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>Aun no tengo cuenta</h2>
            <span>Registra tu correo</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Nombre'
                    required
                />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Correo Electronico'
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Contraseña'
                    required
                />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirmar Contraseña'
                    required
                />
                <CustomButton type='submit'>Registrar</CustomButton>
                
            </form>
        </div>
    )

}

export default SignUp