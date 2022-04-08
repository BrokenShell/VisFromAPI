document.addEventListener("DOMContentLoaded", function() {
    let ds_api_url = "http://127.0.0.1:8000/graph";
    let x_axis = document.getElementById("x_axis");
    let y_axis = document.getElementById("y_axis");
    let target = document.getElementById("target");
    fetch(ds_api_url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            x_axis: x_axis.value,
            y_axis: y_axis.value,
            target: target.value,
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            vegaEmbed("#altair-graph", data);
        })
        .catch(function (err) {
            console.warn("Something went wrong.", err);
        });
});
