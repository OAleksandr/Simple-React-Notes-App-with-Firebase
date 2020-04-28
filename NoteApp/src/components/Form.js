import React, {useState, useContext} from 'react';
import AlertContext from '../context/alert/alertContext';
import FirebaseContext from '../context/firebase/firebaseContext';

const Form = () => {

    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(value.trim())
        {
             firebase.addNote(value.trim()).then(() => {
                 alert.show('Note has been created', 'success');
             }).catch(() => {
                alert.show('Oops, something went wrong', 'danger');
             })
             
             setValue('');
        }
        else
        {
            alert.show('Please Enter Note(s)');
        }

    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Note" value={value} onChange={onChangeHandler}/>
            </div>
        </form>
    )
}

export default Form;