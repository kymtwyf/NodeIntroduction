var fs = require('fs');
fs.open("test.txt","w",function(e,fd){
    if(e) throw e;
    fs.write(fd,"first fs!",0,'utf8',function(e){
        if(e) throw e;
        fs.closeSync(fd);
    })
});

// fs.writeFile("test.txt","Hello Kijiji!",function(err){
//   if(err){
//     console.log("err!")
//   }
// })