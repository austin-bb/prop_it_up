import './App.css';
// import PersonCard from './components/PersonCard';
import FunctionalPersonCard from './components/FunctionalPersonCard';

const person = [
  {"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black"},
  {"firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown"},
  {"firstName": "Fillmore", "lastName": "Millard", "age": 50, "hairColor": "Brown"},
  {"firstName": "Smith", "lastName": "Maria", "age": 62, "hairColor": "Brown"}
]
function App() {
  return (
    <div className="App">
      {
        person.map(person => {
          return <FunctionalPersonCard firstName = {person.firstName} lastName = {person.lastName} age = {person.age} hairColor = {person.hairColor}/>
        })
      }
      
    </div>
  );
}

export default App;
