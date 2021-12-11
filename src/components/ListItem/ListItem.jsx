import React from 'react';
import deleteIcon from '../../assests/delete.svg';
import editIcon from '../../assests/edit.svg';
import './ListItem.css';

const ListItem = ({ goal, deleteGoal, updateGoal}) => {

    return (
        <div className="list-item" data-id={goal.id}>
            <div className="list-content-container">
                <p className="list-content">{goal.content}</p>
            </div>
            <div className="list-icons">
                <div className="delete-list" onClick={() => deleteGoal(goal)}>
                    <img src={deleteIcon} alt="delete" />
                </div>
                <div className="update-list" onClick={() => updateGoal(goal)}>
                    <img src={editIcon} alt="edit" />
                </div>
            </div>
        </div>
    )
}

export default ListItem;