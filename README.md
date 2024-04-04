# supermarket-inventory-api

```bash
docker pull postgres

docker run 
  --name supermarket 
  -p 5432:5432 
  -e POSTGRES_PASSWORD=postgres 
  -e POSTGRES_DB=supermarket 
  -d postgres

docker start supermarket
```

### sequelize commands
```bash
npx sequelize model:create --name usuarios --attributes nome:string,email:string,senha:string
```