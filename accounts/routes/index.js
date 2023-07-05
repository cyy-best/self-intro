var express = require('express');
var router = express.Router();
//导入lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json');
//获取db对象
const db = low(adapter);

const shortid = require('shortid');

/* GET home page. */
router.get('/account', function (req, res, next) {
  let accounts = db.get('accounts').value();
  console.log(accounts);
  res.render('list',{accounts: accounts});
});

router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', (req, res) => {
  console.log(req.body)
  let id = shortid.generate();
  //写入文件
  db.get('accounts').push({ id: id, ...req.body }).write();
  res.render('success', { msg: 'Add Successful', url: '/account' })
});

router.get('/account/:id', (req, res) => {
  //获取参数
  let id = req.params.id;
  db.get('accounts').remove({ id: id }).write();
  res.render('success', { msg: 'Deleted', url: '/account' })
})
module.exports = router;
