# Phoney

**Easy to `create` - `deploy` - `use` mock endpoints**

### Usage
1. Create a new module `cp modules/example.js modules/my-api.js`
1. Add some methods..
1. Access the API at `/my-api`

### Deploy
- Self hosted
    ```
    npm start
    ```
  
- Self hosted (Docker)
    ```
    docker build -t stefanoschrs/phoney . # (optional)
    docker run --rm -p 1337:80 -v $PWD:/opt/app/ stefanoschrs/phoney
    ```

- Free on [openode](https://www.openode.io)
    ```  
    npx openode status
    
    # Register or Login
   
    npx openode deploy
  
    # Well.. That's it :)
    ```

