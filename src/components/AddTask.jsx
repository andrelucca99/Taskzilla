import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit })
{
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o tétulo da tarefa"
        className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={ title }
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={ description }
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha o título e a descrição da tarefa.");
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddTask;