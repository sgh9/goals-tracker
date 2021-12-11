import './App.css';
import data from './data';
import { useState } from 'react';
import ListCard from './components/ListCard/ListCard';
import Form from './components/Form/Form';
import { uuid } from './utils/utils';

function App() {
  const defaultGoal = {
    id: 0,
    type: "LONG TERM",
    content: ""
  };
  const [goal, setGoal] = useState(defaultGoal);
  const [goals, setGoals] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  //validations
  const defaultGoalErrs = {
    type: "",
    content: "",
    valid: true,
  }
  const [goalErrs, setGoalErrs] = useState(defaultGoalErrs);

  const resetStates = () => {
    setGoalErrs(defaultGoalErrs)
    setGoal(defaultGoal);
    setIsUpdate(false);
  }

  /**
   * Adds new goal to goals
   * @param {any} e event object
   * @returns {void} reurns void
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    let newGoal = { ...goal, id: uuid() };
    setGoals([...goals, newGoal]);
    resetStates();
  }

  const deleteGoal = (goal) => {
    let newGoals = goals.filter(goalItem => {
      return goalItem.id !== goal.id
    });

    setGoals(newGoals);
  }

  const updateGoal = (goalToUpdate) => {
    setIsUpdate(true);
    const newGoal = goals.find(goalItem => goalItem.id === goalToUpdate.id);
    setGoal(newGoal);
  }

  const updateGoalAndSave = (e) => {
    e.preventDefault();
    const index = goals.findIndex(goalItem => goalItem.id === goal.id);
    let newGoals = [...goals];
    newGoals[index] = goal;
    setGoals(newGoals);
    resetStates();
  }

  const validate = () => {
    let isValid = true;
    let errMsg = "";

    if (goal.content === "") {
      errMsg = "Please enter your goal";
      isValid = false;
    }
    setGoalErrs({ ...goalErrs, content: errMsg, valid: isValid });
    return isValid;
  }

  const goalsByCategory = (goalType) => {
    let goalsByCategory = {
      [goalType]: goals.filter(goalItem => goalItem.type === goalType)
    }
    return goalsByCategory[goalType];
  }

  return (
    <div className="container">
      <header>
        <h3 className="goals-header">GOALS</h3>
      </header>

      <main>
        <div className="list-card-container">
          {
            (goals.length === 0) ?
                 <ListCard goals={goalsByCategory("LONG TERM")}
                    deleteGoal={deleteGoal} updateGoal={updateGoal} />
            :           
            ["LONG TERM", "SHORT TERM", "IMPORTANT"].map((type) => {

              return (goalsByCategory(type) ?
                <ListCard goals={goalsByCategory(type)}
                  deleteGoal={deleteGoal} updateGoal={updateGoal} />
                :
                null)

            })
          }
        </div>
        <div className="form-container">
          <div className="form-err">{!goalErrs.valid && goalErrs.content}</div>
          <h3 className="goal-form-header">ADD NEW GOAL</h3>
          <Form
            goal={goal}
            onSubmit={(e) => isUpdate ? updateGoalAndSave(e) : handleSubmit(e)}
            onChangeGoal={(e) => setGoal({ ...goal, content: e.target.value })}
            onChangeGoalType={(e) => setGoal({ ...goal, type: e.target.value })} />
        </div>
      </main>

      <footer>
      </footer>
    </div>
  );
}

export default App;