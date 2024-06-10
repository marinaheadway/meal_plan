const MyMealsAndIngridients =(selectedDay, updateDay) => {
    
    const editMyMeal = (myInput, value)=> {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

if (!selectedDay) return  <p>Plan your week ahead of time!</p>

    
    return (
  
        <div className="whole-plan">
         <input 
           type ="text"
           className ="myInput"
           placeholder ="Today is ..."
           id = "title"
           value={selectedDay.title}
           onChange = {(e)=> editMyMeal("title", e.target.value)}
           />

           <textarea 
           placeholder = "Write your meal plan here"/>
         
         <textarea 
           placeholder = "List of ingridients"/>

        </div>
       
    )
}

export default MyMealsAndIngridients;