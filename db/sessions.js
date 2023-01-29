var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session)

const sesionesConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db',

    clearExpired: true,
	checkExpirationInterval: 1500000,
	expiration: 3600000,
	createDatabaseTable: true,
	connectionLimit: 1,
	endConnectionOnClose: true,
	charset: 'utf8mb4_bin',
	schema: {
		tableName: 'SESIONES_T',
		columnNames: {
			session_id: 'SESIONES_ID_S',
			expires: 'FECHA_EXP_S',
			data: 'DATOS_S'
		}
	}
}

var sessionStore = new MySQLStore(sesionesConfig)

module.exports = session({
    key: 'POS',
    secret: 'ae978aa10c628b27427ff2615ad925abdf4171fc7b4d1f7067bd35b23960d371',
    saveUninitialized: false,
    resave: false,
    store: sessionStore
})