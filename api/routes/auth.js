// this is for Uthentication
const express = require('express');
const authMiddleware = require ('../middleware/auth.js')
const router = express.Router();


// Register a new user
router.post('/register',
  authMiddleware.register,
  authMiddleware.signJWTForUser
  // (req, res) => {
  //
  //   res.json({ user:req.user })
  // }
);

//sign in a user
router.post('/signin',
// middleware that allows us to signin
authMiddleware.signIn,
authMiddleware.signJWTForUser
// (req, res) => {
//   res.json({ user:req.user })
// }

);


router.post('/movies',
// middleware that allows us to signin
authMiddleware.signIn,
(req, res) => {
  res.send({ movies: ['Movies!']})

}

);

module.exports = router;
