FROM node

WORKDIR ./my-portfolio


COPY . .


RUN npm install

EXPOSE 3000
CMD ["npm", "start"]