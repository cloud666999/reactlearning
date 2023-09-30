import "./App.css";
import List from "./components/2 - List/List";
import TernaryAndOperators from "./components/3- Tenary Condition/TernaryAndOperators";
import User from "./components/User";
import ComponentRender from "./components/1 - Props/useSomeThings";
import ListMixWithPropsParent from "./components/4- ListMixWithProps/ListMixWithPropsParent";
import UseState from "./components/5- UseState/UseState";
import UseStateWithText from "./components/5- UseState/UseStateWithText";
import HideAndBlock from "./components/5- UseState/HideAndBlock";
import ChangeColor from "./components/5- UseState/ChangeColor";
import Text from "./components/6- UseEffect/Text";
import FetchNameOfObject from "./components/7 - fetch Data from APIs/FetchNameOfObject";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactRouterDOM from "./components/8- ReactRouterDom/ReactRouterDOM";
import Render from "./components/9-useContext of Hooks/Render";
import UseMemo from "./components/10-useMemo/UseMemo";
import UseCallback from "./components/11-useCallback/UseCallback";
import ReactMemo from "./components/12 React Memo/ReactMemo";
import UseRef from "./components/13 useRef of Hooks/UseRef";
import UseRef2 from "./components/13 useRef of Hooks/UseRef2";
import UseReducer from "./components/14 useReducer of Hooks/UseReducer";
import UseReducerWithSpinIcon from "./components/14 useReducer of Hooks/UseReducerWithSpinIcon";
import CustomHook from "./components/15 Custom hook/CustomHook";

function App() {
  return (
    <div className="App">
      {/* <ComponentRender />
      <TernaryAndOperators />
      <List />
      <User />
      <ListMixWithPropsParent />
      <UseState />
      <UseStateWithText />
      <HideAndBlock />
      <ChangeColor />
      <Text /> */}
      {/* <FetchAPIandAxios /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/componentrender" element={<ComponentRender />} />
          <Route path="/teraryandoperators" element={<TernaryAndOperators />} />
          <Route path="/list" element={<List />} />
          <Route path="/user" element={<User />} />
          <Route path="/listmixwithpropsparent" element={<ListMixWithPropsParent />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path='/usestatewithtext' element={<UseStateWithText />}/>
          <Route path="/hideandblock" element={<HideAndBlock />} />
          <Route path="/changecolor" element={<ChangeColor />} />
          <Route path="/text" element={<Text />} />
          <Route path="/reactrouterdom" element={<ReactRouterDOM />} />
          <Route path="/usecontext" element={<Render/>} />
          <Route path="/usememo" element={<UseMemo/>} />
          <Route path="/usecallback" element={<UseCallback/>} />
          <Route path="/reactmemo" element={<ReactMemo/>} />
          <Route path="/useref" element={<UseRef/>} />
          <Route path="/useref2" element={<UseRef2/>} />
          <Route path="/usereducer" element={<UseReducer/>} />
          <Route path="/usereducerwithloadingspin" element={<UseReducerWithSpinIcon/>} />
          <Route path="/customhook" element={<CustomHook/>} />
        </Routes>
      </BrowserRouter>
      {/* <FetchNameOfObject/>  */}
    </div>
  );
}

export default App;
