
import { useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';
import {v4 as uuid} from 'uuid'

function App() {

  const [mealPlans, setMealPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(false);

const addMeal=()=> {
  const newMeal={
    title: "Today is ...", 
    id: uuid (), 
    mealForADay: ""
  }
setMealPlans([newMeal, ...mealPlans])
  console.log ("new meal")
}

const deleteDay=(mealId) => {
  setMealPlans(mealPlans.filter(({id})=> id !==mealId))
}

const updateDay= (myUpdatedMeal) => {
  const updateMeal = mealPlans.map ((mealPlans)=> {
    if (mealPlans.id === myUpdatedMeal.id) {
      return myUpdatedMeal;
    } 
return mealPlans;
  })
  setMealPlans(updateMeal)
}

  return (
    <div className="App">
   <MyList 
   mealPlans={mealPlans}  
   addMeal={addMeal} 
   deleteDay={deleteDay}
   selectedDay={selectedDay}
   setSelectedDay={setSelectedDay}
   />

   <MyMealsAndIngridients 
   selectedDay={selectedDay}
   updateDay={updateDay}
   />

    </div>
  );
}

export default App;
