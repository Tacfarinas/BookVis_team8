from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)


@app.route('/')
def search():
    return render_template('search.html')


if __name__ == '__main__':
    app.run()
