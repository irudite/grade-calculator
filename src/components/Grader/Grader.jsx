import React from 'react'
import { useState } from 'react'
import './Grader.css'

const Grader = () => {
  const [category, setCategory] = useState('')
  const [weight, setWeight] = useState('')
  const [grade, setGrade] = useState('')
  const [row, setRow] = useState([])

  const addRow = () => {
    if (category && weight && grade) {
      const newRow = {category, weight: parseFloat(weight), grade: parseFloat(grade)};
      setRow([...row, newRow]);
      setCategory('');
      setWeight('');
      setGrade('');
    }  
    else {
      console.log("Please fill in all fields");
    }
  }

  const calculateGrade = () => {
    let finalGrade = 0;
    let totalWeight = 0;

    for (let i = 0; i < row.length; i++) {
      finalGrade += (row[i].grade / 100) * row[i].weight; 
      totalWeight += row[i].weight;
    }
    
    finalGrade = finalGrade.toFixed(2);
    

    if (finalGrade < 60) {
      finalGrade += finalGrade + " (F)";
    }
    else if (finalGrade < 70) {
      finalGrade += finalGrade + " (D)";
    }
    else if (finalGrade < 80) {
      finalGrade += finalGrade + " (C)";
    }
    else if (finalGrade < 90) {
      finalGrade += finalGrade + " (B)";
    }
    else if (finalGrade <= 100) {
      finalGrade += finalGrade + " (A)";
    }
    else if (totalWeight > 100 || totalWeight < 0) {
      return "The total weight cannot be above 100 or below 0";
    }
    else {
      return "The total weight cannot be above 100 or below 0";
    }

    return finalGrade;
  }

  const resetGrades = () => {
    setRow([]);
  }

  return (
    <>
      <div class='grader'>
        <div class='container grader__list'>
          <div class='grader__list--title'>
            <h4> Assigment Category </h4> 
            <input placeholder='Enter category' 
            type="text" value={category} onChange={(e) => {setCategory(e.target.value)}}/>
          </div>
          <div class='grader__list--weight'>
            <h4> Weight </h4> 
            <input placeholder='Enter weight' 
            type="number" value={weight} onChange={(e) => {setWeight(e.target.value)}}/>
          </div>
          <div class='grader__list--grade'>
            <h4> Grade </h4>
            <input placeholder='Enter grade'
            type="number" value={grade} onChange={(e) => {setGrade(e.target.value)}}/>
          </div>
          <button onClick={addRow}> Add Category </button>
        </div>
      </div>
      <hr/>

      <div class='grader__table'>
        <h4> Grade List: </h4>
        <div class='grader__table_container'> 
          <table>
            <thead>
              <tr>
                <th> Category </th>
                <th> Weight (%) </th>
                <th> Grade (%) </th> 
              </tr>
            </thead>

            <tbody>
              {row.map((e, index) => (
                <tr key={index}>
                  <td>{e.category}</td>
                  <td>{e.weight}</td>
                  <td>{e.grade}</td>
                </tr>
              ))}
            </tbody>
        </table>

        </div>

        <h4> Final Grade: {calculateGrade()} </h4>
        <button onClick={resetGrades}> Reset Grades</button>
      </div>
    </>
  )
}

export default Grader
