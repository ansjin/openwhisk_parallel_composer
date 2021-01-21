# OpenWhisk Parallel Node.js Composer Application

Deploy remotely MongoDB to be used the OW functions
### Installation

1. Install docker and docker compose
```shell
$ sudo apt-get update
$ sudo apt-get install docker.io -y
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.28.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

### Deploy Mongodb
1. Modify the password in docker-compose.yml file.
2. Insert the fake data to mongodb using the command (modify HOST_IP, password).
```shell
$ sudo docker-compose up -d
$ mongoimport --host HOST_IP -u root -p root_Pass --jsonArray --db ccs --collection products --file MOCK_DATA.json --authenticationDatabase admin
```