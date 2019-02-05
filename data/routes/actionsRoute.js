const express = require('express')
const router = express.Router()

const db = require('../helpers/db')

// endpoints
router.post('/', async (req, res) => {
  const action = req.body;
  if (action.action_description && action.project_id && action.notes) {
      db.getProject(action.project_id)
      .then(project => {
          if(project[0]) {
            db.addAction(action)
              .then(id => {
                res
                  .status(201)
                  .json(id)
              })
              .catch(err => {
                res
                  .status(500)
                  .json({message: 'failed to add action'})
              })
          } else {
            res
              .status(500)
              .json({message: 'No project under that project_id'})
          }
        })
      .catch(err => {
        res
          .status(500)
          .json({message: 'failed to check projects'})
      })
  } else {
      res
      .status(400)
      .json({ message: 'Please provide action description/project_id' });
  }
})

<<<<<<< HEAD
=======

>>>>>>> fb98e847cef7bced69645c5401082e88f2b20aa2
module.exports = router;
