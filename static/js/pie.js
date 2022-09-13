document.addEventListener("DOMContentLoaded", function() {
    let ds_api_url = "http://altairapi-dev.us-east-1.elasticbeanstalk.com/graphs/pie-chart";
    let target = document.getElementById("target");
    console.log(target.value);
    fetch(ds_api_url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
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
