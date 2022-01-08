import Button from './Button';
import Effect from './Effect';
import ToDoList from './ToDoList';
import Movie from './Movie';
import Home from './Home';
import Detail from './Detail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  
  // return (
  //   <div>
  //     {/* <Button test="안녕하세요"/>5.html */}
  //     {/* <Effect/> */} 6.html
  //     {/* <ToDoList/> */} 7.html

      
      
  //   </div>
  // );
  //----------------------------------------------------
  return (//8.html
    <Router>
      <Switch>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
