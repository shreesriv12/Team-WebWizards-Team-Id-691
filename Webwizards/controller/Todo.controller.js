import Todo from "../model/Todo.js";
export const To_do = async(req,res)=>{
try{
    const {Task_Title, Description, Label, Deadline, Priority, Done} = await req.body;
    const registeredTodo = new Todo ({
        Task_Title: Task_Title,
        Deadline: Deadline,
        Description:Description,
        Genre:Genre,
        Priority:Priority,

    });
    await registeredTodo.save();
    res.status(200).json({message: "To-do saved successfully"})
}
catch(error){
console.log("Error",error.message);
res.status(500).json({message: "server error"});
}
}
