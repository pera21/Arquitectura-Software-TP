from flask import Flask, jsonify
from time import sleep

app = Flask(__name__)

@app.route('/gunicorn/ping', methods = ['GET'])
def ping():
	return jsonify(ping=1), 200


@app.route('/gunicorn/proxy/<float:timeout>', methods = ['GET'])
def timeout(timeout):
	sleep(timeout)
	return jsonify(timeout=timeout), 200


@app.route('/gunicorn/fibonacci/<int:n>', methods = ['GET'])
def fibonacci(n):
	return jsonify(result=fibonacci_recursivo(n)), 200

def fibonacci_recursivo(n):
	if n <= 1:
		return n
	return fibonacci_recursivo(n-1) + fibonacci_recursivo(n-2)
