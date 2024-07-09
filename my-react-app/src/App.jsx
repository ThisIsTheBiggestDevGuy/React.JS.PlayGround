
import ToDoList from "./todoListApp/ToDoList"
import Card from "./Parts/cards/Card";
import ColorPicker from './Parts/colorPicker/ColorPicker'
import StopWatch from "./Parts/StopWatch/StopWatch";

function App() {
  return (
    <div>
      <StopWatch/>
      <ToDoList />
      <Card />
      <ColorPicker />
    </div>
  );
}

export default App;
