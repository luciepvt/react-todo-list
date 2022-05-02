const Form = ({ input, setInput, tasks, setTasks }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // empêcher raffraichissement de la page au moment du submit
        // tasks = [{ title: "Sortir le chien", isDone: false },{ title: "Aller chercher du pain", isDone: false }]
        // lorsque j'appuie sur bouton Add Task :
        // je fais une copie de tasks dans laquelle je rejoute la tâche entrée en input du formulaire

        const newTasks = [...tasks];
        newTasks.unshift({ title: input, isDone: false });
        // newTasks = [{ title: "Sortir le chien", isDone: false },{ title: "Aller chercher du pain", isDone: false }, {title : "sortir les poubelles", isDone : false}]
        setTasks(newTasks);
        // avec setTasks =>> maj de tasks
        setInput(""); // une fois le state tasks maj, vider le cache input pour pouvoir entrer une nouvelle valeur
      }}
    >
      <input
        className="newtask"
        type="text"
        placeholder="new task"
        // lorsque que je tape la tâche dans l'input, je stocke l'info
        // si je tape dans l'input : "sortir les poubelles"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <input className="submit" type="submit" value="Add Task" />
    </form>
  );
};
export default Form;
