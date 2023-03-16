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
        ],
        inputText: '',
        userMessage: 'Scrivi il testo del nuovo impegno',
        warningClass: ''
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
    },
    addTask(){
        if(this.inputText.replace(/\s\s+/g, ' ').trim().length >= 5){
            this.toDoList.unshift({text: this.inputText.replace(/\s\s+/g, ' ').trim(), done: false});
            this.inputText = '';
        } else {
            this.userMessage = 'Il testo inserito deve essere composto da almeno 5 caratteri';
            this.warningClass = 'warning'
        }
    },
    resetWarning(){
        if(this.inputText.replace(/\s\s+/g, ' ').trim().length >= 5){
            this.userMessage = 'Scrivi il testo del nuovo impegno';
            this.warningClass = '';
        }
    },
    switchDone(index){
        this.toDoList[index].done = !this.toDoList[index].done;
    }
  }
}).mount('#app')