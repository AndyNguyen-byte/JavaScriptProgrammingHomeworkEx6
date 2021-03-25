let tasks = [];

const $ = function (id) {
  return document.getElementById(id);
};

/**
 * @description Declarative function that updates the textarea with
 * the current contents of the tasks array
 */
function updateTaskList() {
    let taskList = $('taskListDisplay');
    let list = '';
    for (let i = 0; i < tasks.length; i++) {
      list += `${i + 1}: ${tasks[i]}\n`;
    }
    taskList.value = list;
  }
  
  const addTask = function () {
      let invalidTask = $('invalidTask');
      invalidTask ='';

      let task = $('taskInput').value;

      if (!task){
        //good
            tasks.push(task);

            task.value == '';

            updateTaskList();
      } else {
          //bad
          invalidTask.textContent = 'Task cannot be blank.'
      }
  };

  const sortTask = function(){
      task.sort();
      updateTaskList();
  }

  const deleteTask = () =>{
      let deleteErrors = $('invalidTaskNumber');
      deleteErrors.textContent='';
      
      let taskToDelete =$('taskToDeleteInput').value;
      
      if (task.length==0){
          deleteErrors.textContent='No task to delete';
          return
      }

      if (!taskToDelete){
          deleteErrors.textContent='Enter a task number to delete';
          return;
      }

      if(isNaN(taskToDelete)){
          deleteErrors.textContent='You did not enter a number';
          return;
      }

      if (taskToDelete<1 || taskToDelete>task.length){
          deleteErrors.textContent='A task with that number do not exist';
          return;
      }

      task.splice(taskToDelete-1,1);
      updateTaskList();
  }

  //event listeners
  $('addTask').addEventListener('click',addTask);
  $('sortTask').addEventListener('click',sortTask);
  $('deleteTask').addEventListener('click',deleteTask);