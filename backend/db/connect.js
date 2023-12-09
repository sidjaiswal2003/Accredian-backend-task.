import mysql from 'mysql'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'sid',
  password: '',
  database: 'sid',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Connected to the database');
  }
});

export default db
