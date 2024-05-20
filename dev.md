# useful commands
## clean up docker 
```
docker system prune -f
```

## build container with no cache
```
docker-compose build --no-cache
```

## start container
```
docker-compose up -d
```

## open terminal to docker
```
docker-compose exec iris iris session iris -U APP-NAME
```
## debug CSP
```
kill ^%ISCLOG

kill ^ISCLOG

set ^%ISCLOG=3
```

## select zpm test registry
```
repo -n registry -r -url https://test.pm.community.intersystems.com/registry/ -user test -pass PassWord42
```



