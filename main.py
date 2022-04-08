from flask import Flask, render_template, request

APP = Flask(__name__)


@APP.route("/", methods=["GET", "POST"])
def home():
    x_axis = request.values.get("x_axis", "health")
    y_axis = request.values.get("y_axis", "energy")
    target = request.values.get("target", "rarity")

    return render_template(
        "index.html",
        x_axis=x_axis,
        y_axis=y_axis,
        target=target,
        options=["health", "energy", "sanity", "rarity", "level"],
    )


if __name__ == '__main__':
    APP.run()
