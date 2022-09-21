function TSButton() {
    //let name: string = "Fred";
    //document.getElementById("ts-example").innerHTML = greeter(user);
    var name = "Fred";
    var input = document.getElementById("ts-example");
    $.ajax({
        method: "GET",
        url: "GetClientMessages",
    }).done(function (data) { return input.innerHTML += '\n' + data; });
}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Fred", "M.", "Smith");
//# sourceMappingURL=app.js.map