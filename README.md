does not work in docker playground but will play just fine in docker desktop

link to docker hub image: 
https://hub.docker.com/r/dinohunter582/superchat

to start the program in docker
    docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    dinohunter582/superchat

to compose the app
docker-compose up -d --build

