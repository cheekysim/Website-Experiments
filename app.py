from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/search-bar', methods=['GET'])
def searchbar():
    return render_template('search-bar.html')

@app.route('/text-animation', methods=['GET'])
def textanimation():
    return render_template('text-animation.html')

@app.route('/carousel', methods=['GET', 'POST'])
def carousel():
    if request.method == 'POST':
        data = {}
        for folder in os.listdir('static/images/carousels'):
            data[folder] = []
            for file in os.listdir(f'static/images/carousels/{folder}'):
                data[folder].append(file)
        return jsonify(data)
    elif request.method == 'GET':
        return render_template('carousel.html')

@app.route('/h-test', methods=['GET'])
def htest():
    return render_template('h-test.html')

@app.route('/grid-1', methods=['GET'])
def grid1():
    return render_template('grid-1.html')

if __name__ == '__main__':
    app.run(debug=True)