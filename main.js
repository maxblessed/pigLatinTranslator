(function(){

     function pigLatinTranslator(str){
            let vowel=/[aeiouAEIOU]/;
            let arr=str.split(' ');
            let pigLatin=arr.map(function(item){
                if(item[0].match(vowel)){
                    return item+'-way';
                }

                for(let i=1; i<item.length; i++){
                    if(item[i].match(vowel)){
                        return item.substring(i)+item.substring(0,i)+'-ay';
                    }else if(item[i].match(vowel)===null&&i===item.length-1){
                        return item+'-ay';
                    }
                }
            })
          return pigLatin.join(' ');
     }
  
     function id(id){
         return document.getElementById(id);
     }
    
     id('btn').onclick=function(){
         id('piglatin').innerHTML=pigLatinTranslator(id('engWord').value)
     }
}())