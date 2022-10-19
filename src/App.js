import './App.css';
import Calender from './Components/Calender';
import Card from './Components/Card';
import Google from './Components/Google';
import Message from './Components/Message';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Task from './Components/Task';

function App() {

  const text1 = 'Google'
  const text2 = 'Google inc'
  const text3 = 'Slack'
  const text4 = 'Slack corporation'
  const comp = 'Completed'
  return (
    <div className="flex items-center justify-center min-h-screen App">
      <div className="flex items-start justify-between rounded-2xl app-container">
        <div className='hidden nav md:block'>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <div className='flex flex-wrap justify-start dashboard'>
            <Card text1={text1} text2={text2} blue={true} />
            <Task />
            <Calender />
            <Card text3={text3} text4={text4} comp={comp} />
            <Google />
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
