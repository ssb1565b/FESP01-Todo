import { Route, Routes } from "react-router-dom";
import TodoUpdate from "./pages/update/TodoUpdate";
import TodoList from "./pages/TodoList";
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          id="app"
          className="w-[390px] h-[815px] bg-[#383cc2] rounded-[30px]"
        >
          <Routes>
            <Route>
              <Route path="/" element={<TodoList />} />
              <Route path="/update" element={<TodoUpdate />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
