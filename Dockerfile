# Use the official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /

# Install Git
RUN apt-get update && \
    apt-get install -y git

# Install Python
RUN apt-get update && \
    apt-get install -y python3 pipx

RUN pipx install uv

ENV PATH="/root/.local/bin/:${PATH}"

RUN npm install -g typescript

COPY . .

RUN npm install && npm run build
CMD ["uvx", "mcpo", "--port", "3000", "--", "node", "dist/index.js"]
