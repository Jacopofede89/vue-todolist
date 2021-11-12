var app = new Vue(
    {
        el: "#app",
        data: {
            newTask: "",
            tasks: [
                {text: "Fare la spesa", done: false},
                {text: "Andare in palestra", done: true},
                {text: "Fare aperitivo", done: false},
                {text: "Stirare", done: true},
                {text: "Pulire", done: false},
                {text: "Riposarsi", done: true},
                {text: "Cenare", done: true},
            ]
        },
        methods: {
            removeTask: function(x) {
                this.tasks.splice(x, 1);
            },
            addTask: function() {
                let newTaskadd = {text: this.newTask};
                this.tasks.push(newTaskadd);
                this.newTask = "";
            }
        }
});
