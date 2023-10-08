//导入模块
const fs = require('fs');
const { resolve } = require('path');
//封装一个函数
function readFileFun(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
//调用
readFileFun('../个人介绍.txt').then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
})
