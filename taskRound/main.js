//题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。
function resolve(inputs){
      let temp_arr=[];
      let k =inputs;
      for(let m=1;m<=inputs;m++){          
            if(is_prime_number(m)){
                  if (k%m==0){
                        temp_arr.push(m);
                        k=k/m
                  }
                  
            }
      }
      return temp_arr;     
}

//判断num是否为质数，如果是质数，返回trforue，否则返回false
function is_prime_number(num){
      let new_arr=[];
      for(let i =1;i<=num;i++){
            if (num/i == 0){
                  new_arr.push(i)
            }
      }
      if (new_arr.length==2){
            return true;
      }else{
            return false;
      }
      
}

function printAns(inputs,ans){
      let aa;
      for(let i in ans){
            aa+=i
      }
      return inputs +'='+aa;
}

module.exports = function main(inputs){
      let ans= resolve(inputs)
      printAns(inputs,ans)
      
      
};