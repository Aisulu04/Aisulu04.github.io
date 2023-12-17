import './App.css';
import About from './components/about/About';
import Form from './components/form/Form';
import Me from './components/me/Me';
import Navbar from './components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from './components/todo/Todo';
import Fetching from './components/Fetching/Fetching';
import Clock from './components/clock/Clock';
import University from './components/university/University';
import Languages from './components/languages/Languages';
import Hobby from './components/Hobby/Hobby';


const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Me />
    </section>
    
    <section id='Portfolio3'>
      <Languages/>
    </section>
    <section id='Hobby'>
      <Hobby/>
    </section>
    <section id='University'>
      <University/>
    </section>
    <section id='About'>
      <About/>
      <Clock/>
    </section>
    <section id='Portfolio1'>
      <Todo/>
      
    </section>
    <section id='Portfolio2'>
      <Fetching/>
    </section>
    <section id='Contact'>
      <Form/>
    </section>
  </div>
}

export default App;


