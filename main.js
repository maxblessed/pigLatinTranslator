(function(){

     function pigLatinTranslator(str){
            let vowel=/[aeiouAEIOU]/;
            let pigLatin=[];
            let arr=str.split(' ');
            arr.map(function(item){
                  if(item[0].match(vowel)){
                      pigLatin.push(item+'way');
                      return ;
                  }

                  for(let i=1; i<item.length; i++){
                        if(item[i].match(vowel)){
                            pigLatin.push(item.substrin(i)+item.substring(0,i)+'ay');
                            return;
                        }else if(item[i].match(vowel)===null&&i===item.length-1)
                        {
                            pigLatin.push(item+'ay');
                            return;
                        }
                  }
            })
            return pigLatin.join(' ');
     }

     function id(id){
          return document.getElementById(id);
     }

     id('btn').onclick=function(){
         id('piglatin').innerHTML=pigLatinTranslator(id('engWord').value);
     }
}())