# MockBackendTemplate
NodeJs "mock" backend template project.

Used to mock a backend microservice.

Run:

`docker build . -t mockbackend`

to build the image locally, then run:

`docker run -p 8080:8080 mockbackend`

to start up the server.

Go to http://localhost:8080/DoStuff to see the sample endpoint response


