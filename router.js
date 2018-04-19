app.get("/loadmore",function(req,res){
  var cuIdx=req.query.index
  var len=req.query.length
  var data=[]
  for(var i=0;i<len;i++){
  data.push("新闻"+(parseInt(cuIdx)+i))
  }
  res.send(data);
})
