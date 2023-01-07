# syntax=docker/dockerfile:1

FROM python:3.11-bullseye

WORKDIR /root/app

COPY requirements.txt requirements.txt
RUN pip3 install --no-input -r requirements.txt && pip3 install --no-input gunicorn

COPY . .

CMD ["gunicorn"  , "-b", "0.0.0.0:3001", "app:app"]
