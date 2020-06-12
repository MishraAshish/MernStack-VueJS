//Object - in a little more detail

var User = {
    Name: "Brian",
    Age : 18,
    Address : {
        Line1 : "Line1",
        Line2 : "Line2"
    },
    GetName : function () {
        return this.Name;
    }
}

var User2 = {
    Name: "Dennis",
    Activity : "in lockdown",
}

// User2 - Target , User - Source which copies all its values even common ones
var User3 = Object.assign(User2, User);

console.log("User 3", User3);
console.log("User 2", User2);
console.log("User ", User);