const { createApp } = Vue

createApp({
  data() {
    return {
        toDoList: [
            {
                text: 'task1',
                done: false
            },
            {
                text: 'task2',
                done: false
            },
            {
                text: 'task3',
                done: true
            },
            {
                text: 'task4',
                done: false
            },
        ]
    }
  },
  methods: {
    taskDone(index){
        if(this.toDoList[index].done){
            return 'done';
        }
    },
    deleteTask(index){
        this.toDoList.splice(index, 1);
    }
  }
}).mount('#app')