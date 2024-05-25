# Running the application
## Local setup
* Install docker engine and client
** Docker desktop
** Rancher Desktop
* RUN docker-compose -f docker/docker-compose.yml up
** This will start a mongo server running at and exposing port 27017. The default root user and password are set to "admin" and "admin" respectively.
** Also, it will start mongo express (a web interface to connect to a mongo DB), that connects to the mongo DB created above. The login for mongo express is set to basic auth with username and password being "admin" and "admin" respectively.
** Note that there is a volume mount (/data/**) to persist the mongo data