# How-To Run

## router

* .env

```
APOLLO_KEY=service:airlock-t4peup:nDNCh26gjVpBAdTLhLYe-A
APOLLO_GRAPH_REF=airlock-t4peup@current
```

* run

```
APOLLO_KEY=service:airlock-t4peup:nDNCh26gjVpBAdTLhLYe-A \
APOLLO_GRAPH_REF=airlock-t4peup@current \
./router --config config.yaml
```

## monolith

* services: open a terminal (terminal 1)

```
npm run launch
```

* server: open a terminal (terminal 2)

```
npm start
```

## subgraphs

* each of the subgraphs: open a terminal (terminal 3)

```
npm start
```

## client

* client side: open a terminal (terminal 4)

```
npm start
```


## Required

* rover CLI
* authentication with rocver CLI: `rover config auth`












