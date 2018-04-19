app.get("/loadmore",function(req,res){
  var cuIdx=req.query.idx
  var len=req.query.len
  var date=[]
  for(var i=0;i<len;i++){
  data.push("新闻"+(parseInt(cuIdx)+i))
  }
  res.send(data);
})
