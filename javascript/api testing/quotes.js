const box = document.getElementById("HTML1").getElementsByClassName("widget-content")[0];

let data = fetch("https://api.themotivate365.com/stoic-quote").then(function (response) {
    return response.json();
    // console.log(response.body())
}).catch(function name(error) {
    return error.json();
})
data.then(function(result){
    box.innerHTML = `${result.quote} - ${result.author}`;
});
// console.log(data);