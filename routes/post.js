const express = require("express");
const router = express.Router();


const arrayObjects = [
    { id: 1, name: 'jasser' },
    { id: 2, name: 'jammeli' },
    { id: 3, name: 'glsi1' }
  ];

  // http://localhost:9000/post/all
  router.get('/all', (req, res) => {
    res.json(arrayObjects);
  });

  // http://localhost:9000/post/:d
router.get('/:id',(req,res)=>{
  const postId = parseInt(req.params.id);
  const post = arrayObjects.find(post => post.id === postId);
      res.json(post); 
});


module.exports = router;