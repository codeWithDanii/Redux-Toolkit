import { Provider } from "react-redux";
import "./App.css";
import TodoForm from "./component/TodoForm";
import store from "./app/store/store";
import TodoItems from "./component/TodoItems";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{<TodoForm />}</div>
          <div className="flex flex-wrap gap-y-3">{<TodoItems />}</div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
