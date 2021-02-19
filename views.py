from datetime import datetime

from flask import render_template

from app import app


@app.route('/')
def index():
    now = datetime.now()
    year = now.year
    return render_template('index.html', year=year)


if __name__ == '__main__':
    app.run('127.0.0.1', 8585, debug=True)
