import React, { useState } from 'react'
import MainLabel from '../core/MainLabel/MainLabel'
import styles from './RegisterationForm.module.css'
import validator from 'validator';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../redux/actions/users'


const RegisterationForm = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username: '', email: '', age: 0, errors: {
            username: '',
            email: '',
            age: ''
        }
    })

    const { username, email, age, errors } = formData

    const onChange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'username':
                errors.username = validator.isLength(value, { min: 5, max: 10 }) ? '' : 'Username must be between 5 and 10 characters!';
                break;
            case 'email':
                errors.email = validator.isEmail(value) ? '' : 'Email is not valid!';
                break;
            default:
                break;
        }

        setFormData({ ...formData, [name]: value, errors })
    }

    const onSubmit = async e => {
        e.preventDefault()

        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));

        if (!valid) return;

        const data = await axios.post('https://localhost:5001/api/users', { username, email, age }, {
            headers: { 'Content-Type': 'application/json' }
        })

        dispatch(getUsers())
    }

    return (
        <section>
            <MainLabel text="User Registration" />
            <form onSubmit={e => onSubmit(e)}>
                <div className={styles.formGroup}>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={e => onChange(e)} required autoComplete="off" />
                    {errors.username.length > 0 && <span className={styles.error}>{errors.username}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input type="text" name="email" value={email} onChange={e => onChange(e)} required autoComplete="off" />
                    {errors.email.length > 0 && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label>Age:</label>
                    <input type="number" name="age" value={age} onChange={e => onChange(e)} required min="1" max="99" />
                </div>

                <button className={styles.btn} type="submit">Create User</button>
            </form>
        </section>
    )
}

export default RegisterationForm
