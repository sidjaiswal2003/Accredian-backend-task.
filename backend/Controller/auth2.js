import bcrypt  from 'bcrypt'
import db from '../db/connect.js'
export const userSign=async(req,res)=>{
    const { username, email, password } = req.body;

    
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = {
      username,
      email,
      password: hashedPassword,
    };


    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) {
        console.error('Error checking duplicate email:', error);
        res.status(500).send('Internal Server Error');
      } else if (results.length > 0) {
        res.status(400).send('Email is already registered');
      } else {

        db.query('INSERT INTO users SET ?', user, (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Internal Server Error');
          } else {
            res.status(201).send('User registered successfully');
          }
        });
      }
    });


}
export default userSign