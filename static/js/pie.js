document.addEventListener("DOMContentLoaded", function() {
    let ds_api_url = "http://127.0.0.1:8000/graphs/pie-chart";
    let target = document.getElementById("target");
    console.log(target.value);
    fetch(ds_api_url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
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
