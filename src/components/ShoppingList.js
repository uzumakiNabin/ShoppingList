import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../actions/itemActions';
import ItemModal from './ItemModal';
import classes from './ShoppingList.module.css';

function ShoppingList() {
    const items = useSelector(state => state.item.items);
    const dispatch = useDispatch();
    const deleteItemAction = bindActionCreators(deleteItem, dispatch);
    
    return(
        <div className = {classes.container}>
            <ItemModal />
            <ul className = {classes.list}>
                {items.map(item => (
                    <li className = {classes.list_item} key={item.id}>
                        {item.name}
                        <button onClick = {() => deleteItemAction(item.id)}><i className="fa fa-trash"></i></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;