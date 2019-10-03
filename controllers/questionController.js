var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Question = mongoose.model('Question');
const Image = mongoose.model('Image');

router.get('/resultImage', (req, res) => {
  res.send("huy")
})


router.get('/result', (req, res) => {
  Question.count().exec(function (err, count) {
    var random = Math.floor(Math.random() * count);
    Question.findOne({}, { __v: 0, key: 0, explain: 0 }).skip(random).exec(
      function (err, result) {
        var question = result.question;
        var idQuestion = result._id;
        res.send({
          "messages": [
            {
              "attachment": {
                "type": "image",
                "payload": {
                  "url": question
                }
              },
              "quick_replies": [
                {
                  "title": "A",
                  "set_attributes": {
                    "answer": "A",
                    "idcauhoi": idQuestion
                  }
                },
                {
                  "title": "B",
                  "set_attributes": {
                    "answer": "B",
                    "idcauhoi": idQuestion
                  }
                },
                {
                  "title": "C",
                  "set_attributes": {
                    "answer": "C",
                    "idcauhoi": idQuestion
                  }
                },
                {
                  "title": "D",
                  "set_attributes": {
                    "answer": "D",
                    "idcauhoi": idQuestion
                  }
                }
              ]
            }
          ]
        })
      }
    )
  })
})

router.post('/result', urlencodedParser, (req, res) => {
  var answer = req.body.answer;
  var idQuestion = req.body.idQuestion;
  Question.findOne({ _id: idQuestion }).exec((err, docs) => {
    if (!err) {
      var key = docs.key;
      var explain = docs.explain;
      if (answer != key) {
        res.send({
          "messages": [
            { "text": "Bạn đã trả lời sai :( " },
            {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "button",
                  "text": explain,
                  "buttons": [
                    {
                      "type": "show_block",
                      "block_names": ["Part 5"],
                      "title": "Nhận câu hỏi khác"
                    }
                  ]
                }
              }
            }
          ]
        })
      } else {
        res.send({
          "messages": [
            { "text": "Bạn đã trả lời đúng <3 " },
            {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "button",
                  "text": explain,
                  "buttons": [
                    {
                      "type": "show_block",
                      "block_names": ["Part 5"],
                      "title": "Nhận câu hỏi khác"
                    }
                  ]
                }
              }
            }
          ]
        })
      }
    }
  })

})

// router.post('/result', urlencodedParser, (req, res) => {
//     var username = req.body.username;
//     var password = req.body.password;
//     res.send("Username :" + username + " Password :" + password);
// })

module.exports = router;