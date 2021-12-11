import React from "react";
import ListItem from "../ListItem/ListItem";
import './ListCard.css';

const ListCard = ({ goals, deleteGoal, updateGoal }) => {
    return (
        <div className="list-card">
            <div className="card-header">
                <h3 className="title"><strong>{goals[0] && goals[0]?.type + ":"}</strong></h3>
            </div>
            <div className="card-body">
                {goals?.map(goal => (
                    <ListItem
                        key={goal.id}
                        goal={goal}
                        deleteGoal={deleteGoal}
                        updateGoal={updateGoal} 
                    />
                ))}
            </div>
            <div className="card-footer">
                <div className="card-add-goal">
                    {" "}
                    <span className="add-goal-icon">+</span> Add another goal
                </div>
            </div>
        </div>
    );
};

export default ListCard;
