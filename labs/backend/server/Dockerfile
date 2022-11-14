FROM python:latest

WORKDIR /
RUN /usr/local/bin/python -m pip install --upgrade pip

COPY requirements.txt /
RUN pip3 install --upgrade pip -r requirements.txt

COPY . .

CMD ["python","main.py"]
