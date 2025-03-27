from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start_game', methods=['POST'])
def start_game():
    name = request.form['name']
    mood = request.form['mood']

    if mood == "Happy":
        return render_template('game.html', name=name, mood=mood)
    elif mood == "Sad":
        return render_template('void.html', name=name)
    else:
        return '''
            <script>
                alert("Fun Fact: Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!");
                
                window.location.href = "/";
            </script>
        '''

@app.route('/void', methods=['GET', 'POST'])
def void():
    if request.method == 'POST':
        return render_template('final_message.html')
    return render_template('void.html')

if __name__ == '__main__':
    app.run(debug=True)
