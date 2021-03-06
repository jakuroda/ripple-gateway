var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ripple_addresses', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },	 	
    user_id: { type: 'int', notNull: true },
    managed: { type: 'boolean', default: false, notNull: true},
    address: { type: 'string', notNull: true },
    type: { type: 'string', notNull: true },
    tag: { type: 'string' },
    secret: { type: 'string' },
    previous_transaction_hash: { type: 'string' },
    createdAt: { type: 'datetime' },
    updatedAt: { type: 'datetime' }
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('ripple_addresses', callback);
};
