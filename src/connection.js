class Connection {
    constructor() {
      if (!this.pool) {
        console.log('creating connection pool...')
        this.pool = mysql.createPool({
          connectionLimit: 100,
          host: '35.193.141.205',
          user: 'root',
          password: '12880758',
          database: 'serversaver',
          debug: false
        })
  
        return this.pool
      }
  
      return this.pool
    }
  }
  
  const instance = new Connection()
  
  module.exports = instance;