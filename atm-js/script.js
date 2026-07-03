var system = {

    users: [],

    add: function () {

    var userName = prompt("Enter Name");
    var userId = Number(prompt("Enter ID"));
    var money = Number(prompt("Enter Balance"));

    for (var i = 0; i < this.users.length; i++) {

        if (this.users[i].id == userId) {
            alert("id is existing");
            return;
        }

    }

    this.users.push({
        name: userName,
        id: userId,
        balance: money
    });

    alert("user is added ");
},

    take: function () {

        var id = Number(prompt("enter id to withdraw"));
        var money = Number(prompt("enter amount"));

        for (var i = 0; i < this.users.length; i++) {

            if (this.users[i].id == id) {

                if (money <= this.users[i].balance) {

                    this.users[i].balance -= money;

                    alert("withdraw successfully");
                    alert("remaining balance: " + this.users[i].balance);

                } else {

                    alert("money is not enough");
                    alert("balance is " + this.users[i].balance);

                }

                return;
            }
        }

        alert("user is not found ");
    },

     move: function () {

        var id1 = Number(prompt("enter id of sender"));
        var id2 = Number(prompt("enter id of reciever"));
        var money = Number(prompt("enter amount to transfer"));

        var user1;
        var user2;

        for (var i = 0; i < this.users.length; i++) {

            if (this.users[i].id == id1) {
                user1 = this.users[i];
            }

            if (this.users[i].id == id2) {
                user2 = this.users[i];
            }

        }

        if (user1 == undefined || user2 == undefined) {
            alert("user is not founded");
            return;
        }

        if (money > user1.balance) {
            alert("money is not enough");
            return;
        }

        user1.balance -= money
        user2.balance += money

        alert(" transfer is donee")






    },
     remove: function () {

        var id = Number(prompt("enter id to remove"));

        for (var i = 0; i < this.users.length; i++) {

            if (this.users[i].id == id) {

                this.users.splice(i, 1);

                alert("user is deleted");
                return;
            }

        }

        alert("user is not found to remove");
    }

};

    
    



system.add();
system.add();
system.add();


system.take();

system.move();
system.remove();




console.log(system.users);