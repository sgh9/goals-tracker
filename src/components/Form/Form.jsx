import React from 'react';
import InputText from '../InputText/InputText';
import InputSelect from '../InputSelect/InputSelect';
import Button from '../Button/Button';
import './Form.css';

const Form = ({ goal ,onSubmit, onChangeGoal, onChangeGoalType }) => {

    let options = [
        { id: 1, value: "LONG TERM" },
        { id: 2, value: "SHORT TERM" },
        { id: 3, value: "IMPORTANT" }
    ];

    return (
        <div className="form-group">
            <form className="goal-form" onSubmit={onSubmit}>
                <InputText name="goalContent" value={goal.content} onChange={onChangeGoal} />
                <InputSelect name={'type'} options={options} value={goal.type} onChange={onChangeGoalType} />
                <Button type="submit" value="Add" />
            </form>
        </div>
    )
}
export default Form;