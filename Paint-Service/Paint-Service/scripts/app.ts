function TSButton() {
    //let name: string = "Fred";
    //document.getElementById("ts-example").innerHTML = greeter(user);
    let name: string = "Fred";
    const input = document.getElementById("ts-example") as HTMLInputElement;
    $.ajax({
        method: "GET",
        url: "GetClientMessages",
    }).done((data) => input.innerHTML += '\n' + data);
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Fred", "M.", "Smith");
