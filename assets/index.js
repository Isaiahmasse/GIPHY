var topics = ["dog", "cat", "hamster", "monkey", "bird", "lion", "giraffe"];
$("#buttonsArea").append(topics[0]);

var a = $("<button>")

a.text("cat")
$("#buttonsArea").append(a);

var b = $("<button>")

for (var i = 0; i < 7 ; i++){
    $("#buttonsArea").append(b.text("1"));
console.log("hi")
}