import bcrypt  from 'bcrypt'
import db from '../db/connect.js'

export const userLogin=async(req,res)=>{
    const { email, password } = req.body;


    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
      if (error) {
        console.error('Error checking user:', error);
        res.status(500).send('Internal Server Error');
      } else if (results.length === 0) {
        res.status(401).send('Invalid credentials');
      } else {
        const user = results[0];
  

        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      }
    });



}

export default userLogin