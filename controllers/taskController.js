const fs=require('fs');
const path=require('path');

const dataPath=path.join(__dirname,'..','data','tasks.json');

function readTasks(){
    const data=fs.readFileSync(dataPath,'utf-8');
    return JSON.parse(data);
}

function writeTasks(tasks){
    fs.writeFileSync(dataPath,JSON.stringify(tasks,null,2), 'utf-8');
}

function createTask(req,res){
    const tasks=readTasks();

    const newTask={
        id:tasks.length>0?tasks[tasks.length-1].id+1:1,
        title:req.body.title,
        description:req.body.description,
        status: req.body.status || 'pending',
        priority: req.body.priority || 'medium',
        assignee: req.body.assignee,
        created_at: new Date().toISOString()
    };

    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
}

function getAllTasks(req,res){
    const tasks=readTasks();
    res.status(200).json(tasks);    
}

function getTaskById(req,res){
    const tasks=readTasks();
    const task=tasks.find(t=>t.id===parseInt(req.params.id));
    if(!task){
        return res.status(404).json({message:'Görev bulunamadı'});
    }
    res.status(200).json(task);
}

function updateTask(req, res) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({ message: 'Görev bulunamadı' });
    }

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.status = req.body.status ?? task.status;
    task.priority = req.body.priority ?? task.priority;
    task.assignee = req.body.assignee ?? task.assignee;

    writeTasks(tasks);
    res.status(200).json(task);
}

function deleteTask(req,res){
    const tasks=readTasks();
    const index=tasks.findIndex(t=>t.id===parseInt(req.params.id));
    if(index===-1){
        return res.status(404).json({message:'Görev bulunamadı'});
    }
    const deletedTask=tasks.splice(index,1);
    writeTasks(tasks);
    res.status(200).json({message:'Görev silindi',task:deletedTask[0]});
}

module.exports={
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};

