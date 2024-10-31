import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [employee, setEmployee] = useState();

  const getEmployee = async () => {
    
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  };

  useEffect(() => {
    getEmployee();
      },
    []
  )

console.log(employee)

  return (
    <div className='App'>
      <h2>Employee</h2>
    </div>
  );
}

export default App;