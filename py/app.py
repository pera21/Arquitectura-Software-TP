from flask import Flask

app = Flask(__name__)

@app.route("/")
def raiz():
	return "Ping python\n"

if __name__ == __main__:
	app.run()