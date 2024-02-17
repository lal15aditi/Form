import React, {useState} from 'react'

const Form = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirm: ''
    });

    const [emailErr, setEmailErr] = useState(true);
    const [passErr, setPassErr] = useState(true);
    const [confirmErr, setConfirmErr] = useState(true);

    const handleInput = (e) => {
        if(e.target.name === 'email') {
            const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(!emailPattern.test(e.target.value)) {
                setEmailErr(true);
            }
            else setEmailErr(false);
        } else if(e.target.name === 'password') {
            if(e.target.value.length < 8) {
                setPassErr(true);
            }
            else setPassErr(false);
        } else {
            if(e.target.value != input.password) {
                setConfirmErr(true);
            }
            else setConfirmErr(false);
        }
        setInput({...input, [e.target.name]: e.target.value});
    }

    const signup = (e) => {
        e.preventDefault();
        if(!emailErr && !passErr && !confirmErr) {
            alert('Form submitted successfully');
            setInput({
                email: '',
                password: '',
                confirm: ''
            })
            setEmailErr(true);
            setPassErr(true);
            setConfirmErr(true);
        }
        else alert('Form cannot be submitted')

    }

  return (
    <div className='main'>
        <h2>Signup Form</h2>
        <form>
            <div className="email-box">
                <label htmlFor="email"><b>Email: </b></label>
                <input type="text" name="email" className={emailErr ? 'red-border' : 'green-border'} id="email" onChange={handleInput} value={input.email} placeholder='Enter your Email'/>
                {emailErr && <small>Invalid Email Format</small>}
            </div>
            <div className="password-box">
                <label htmlFor="password"><b>Password: </b></label>
                <input type="password" name='password' className={passErr ? 'red-border' : 'green-border'} id='password' onChange={handleInput} value={input.password} placeholder='Enter your Password'/>
                {passErr && <small>Password must be at least 8 characters</small>}
            </div>
            <div className="confirm-box">
                <label htmlFor="confirm"><b>Confirm Password: </b></label>
                <input type="password" name='confirm' className={confirmErr ? 'red-border' : 'green-border'} id='confirm' onChange={handleInput} value={input.confirm} placeholder='Confirm your Password'/>
                {confirmErr && <small>Passwords do not match</small>}
            </div>
            <button type='submit' onClick={signup}>Sign Up</button>
        </form>
    </div>
  )
}

export default Form