import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '../actions/itemActions';
import classes from './ItemModal.module.css';

function ItemModal() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className = {classes.container}>
            <button onClick = {() => setIsOpen(!isOpen)} className = {classes.open_btn}>Add Item</button>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </div>
    );
}

function Modal(props) {
    const dispatch = useDispatch();
    const addItemAction = bindActionCreators(addItem, dispatch);

    const [name, setName] = useState("");

    const submitForm = e => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            name: name
        };
        addItemAction(newItem);
        props.setIsOpen(false);
    }

    return(
        <div className = {classes.modal_container}>
            <div className = {classes.modal}>
                <h1 className = {classes.modal_title}>Add to Shopping List</h1>
                <button onClick = {() => props.setIsOpen(false)} className = {classes.close_btn}>X</button>
                <form onSubmit = {submitForm}>
                    <div className = {classes.form_group}>
                        <label htmlFor="item">Item</label>
                        <input type="text" name="name" id="item" placeholder="Add shopping" onChange = {(e) => setName(e.target.value)} required />
                        <button type="submit">Add Item!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ItemModal;