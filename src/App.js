
import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';
import {v4 as uuid} from 'uuid'

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse (localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect (()=> {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

const addMeal =()=> {
  const newMeal = {
    title: "Today is ...", 
    id: uuid (), 
    mealForADay: "",
    ingredients:""
  }
setMealPlans([newMeal, ...mealPlans])
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

const getActiveMeal =()=> {
  return mealPlans.find(({id}) => id === selectedDay)
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
   selectedDay={getActiveMeal()}
   updateDay={updateDay}
   />

    </div>
  );
}

export default App;
