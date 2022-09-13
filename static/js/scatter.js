document.addEventListener("DOMContentLoaded", function () {
    let ds_api_url = "http://127.0.0.1:8000/graphs/scatter-plot";
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
        .then((response) => response.json())
        .then((data) => {
            let target = document.getElementById("altair-text");
            let description = document.createElement("p");
            let text = document.createTextNode(data.text);
            description.appendChild(text);
            target.appendChild(description);
            vegaEmbed("#altair-graph", data.graph);
        })
        .catch((err) => console.warn("Something went wrong!", err));
});
