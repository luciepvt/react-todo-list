import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Form from "./components/Form";
import Search from "./components/Search";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash, faBars);

const App = () => {
  /* input = la valeur de l'input du formulaire, setInput la fonction pour modifier le state */
  const [input, setInput] = useState("");
  /* task = le tableau des taches entrées dans le form, setTasks la fonction pour modifier le tab  */
  const [tasks, setTasks] = useState([
    { title: "Sortir le chien", isDone: false },
    { title: "Aller chercher du pain", isDone: false },
  ]);

  const [search, setSearch] = useState("");

  return (
    <div>
      <header>
        <div className="left-header">
          <FontAwesomeIcon className="menu" icon="bars" />
          <h1>Todo list</h1>
        </div>
      </header>
      <div className="limit-header"></div>
      <main>
        <div>
          <Search setSearch={setSearch} />
        </div>
        <div className="tasks">
          {/* Pour chaque élément de tasks, je return un component Task */}
          {/* si tasks = [{ title: "Sortir le chien", isDone: false },{ title: "Aller chercher du pain", isDone: false }] */}
          {tasks.map((item, index) => {
            const regex = new RegExp(search, "i");
            if (regex.test(item.title)) {
              return (
                <Task
                  key={index}
                  title={item.title}
                  isDone={item.isDone}
                  index={index}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              );
            }
          })}
        </div>
        <Form
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
        />
      </main>
    </div>
  );
};

export default App;
