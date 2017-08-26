const crypto = require('crypto').randomBytes(2566).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/' + this.db,
    secret: crypto,
    db: 'site-deep'
}