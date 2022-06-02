FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app/api
COPY requirement.txt ./
RUN pip install -r requirement.txt
COPY . ./
EXPOSE 8000