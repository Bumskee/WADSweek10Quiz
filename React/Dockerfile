
FROM node:13.12.0-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@5.0.0 -g 
RUN npm install bootstrap@5.1.3 -g 
RUN npm install firebase@9.6.9 -g 
RUN npm install react-bootstrap@2.4.0 -g 
RUN npm install react-dom@17.0.2 -g 
RUN npm install react-router-dom@6.2.2 -g 
RUN npm install web-vitals@2.1.4 -g 
COPY . ./
EXPOSE 3000