FROM python:3.6.4
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN pip3 install -r requirements.txt
ENTRYPOINT ["gunicorn","-w 1","-b 0.0.0.0:8000","app:app"]