import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm () {

    const [formState, setFormState] = useState({name : ' ', email : ' ', message : ' '});

    //handle error state 
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email,message} = formState;


    //handles the form submission
    function handleSubmit (e) {
        e.preventDefault();
        //console.log(formState);
        if (!errorMessage)
        {
            setFormState(...formState,{[e.target.name] : e.target.value});
            //console.log(formState);
        }
        
    }

    // console.log(formState);

    //handles the change in the state of the form elements
    function handleChange (e) {
        //validate email field
        if (e.target.name === 'email')
        {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid)
            {
                setErrorMessage('Your email is invalid.');
            }
            else
            {
                setErrorMessage('');
            }
        }
        else
        {
            console.log("i am here");
            if (!e.target.value.length)
            {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else
            {
                setErrorMessage('');
            }
        }

        //console.log("error message", errorMessage);      

    };


    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue = {name} onBlur = {handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue = {email} onBlur = {handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue = {message} onBlur = {handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm
