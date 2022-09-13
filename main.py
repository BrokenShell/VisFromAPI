from flask import Flask, render_template, request

APP = Flask(__name__)


@APP.route("/")
@APP.route("/scatter", methods=["GET", "POST"])
def scatter():
    x_axis = request.values.get("x_axis", "health")
    y_axis = request.values.get("y_axis", "energy")
    target = request.values.get("target", "rarity")
    return render_template(
        "scatter.html",
        x_axis=x_axis,
        y_axis=y_axis,
        target=target,
        axis_options=["health", "energy", "sanity"],
        target_options=["type", "rarity", "level"],
    )


@APP.route("/bar", methods=["GET", "POST"])
def bar():
    x_axis = request.values.get("x_axis", "rarity")
    target = request.values.get("target", "type")
    return render_template(
        "bar.html",
        x_axis=x_axis,
        target=target,
        x_options=["type", "rarity", "level"],
        target_options=["type", "rarity", "level"],
    )


@APP.route("/pie", methods=["GET", "POST"])
def pie():
    target = request.values.get("target", "rarity")
    return render_template(
        "pie.html",
        target=target,
        target_options=["type", "rarity", "level"],
    )


if __name__ == '__main__':
    APP.run()
