var prompt = require('prompt');
prompt.start();
prompt.get(['num1','num2'],function(err,result){
	console.log(result.num1+" * "+result.num2+" = "+result.num1*result.num2);
});
