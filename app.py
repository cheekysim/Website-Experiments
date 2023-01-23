from flask import Flask, render_template, request, jsonify
import os
from PIL import Image

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
                if file.endswith('.webp'):
                    data[folder].append(file)
                else:
                    img = Image.open(f'static/images/carousels/{folder}/{file}')
                    img.thumbnail((250, 250))
                    img.save(f'static/images/carousels/{folder}/{file.split(".")[0]}.webp', 'WEBP')
                    data[folder].append(f'{file.split(".")[0]}.webp')
                    os.remove(f'static/images/carousels/{folder}/{file}')
        return jsonify(data)
    elif request.method == 'GET':
        return render_template('carousel.html')

@app.route('/h-test', methods=['GET'])
def htest():
    return render_template('h-test.html')

@app.route('/grid-1', methods=['GET'])
def grid1():
    return render_template('grid-1.html')

@app.route('/box-model', methods=['GET'])
def boxmodel():
    return render_template('box-model.html')

if __name__ == '__main__':
    app.run(debug=True)