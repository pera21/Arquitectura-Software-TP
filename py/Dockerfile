FROM python:3.6.4
RUN mkdir /app
WORKDIR /app
COPY app.py
COPY package.json
COPY package-lock.json

RUN npm install
ENTRYPOINT["gunicorn", "app.py"]