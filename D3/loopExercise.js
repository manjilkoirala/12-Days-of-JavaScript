

//Finding Maximum number in an array
const max=(numbers)=>{
    let result=numbers[0];
    for(const number of numbers){
        if(number>result){
            result=number;
        }

    }
    return { result };
}

test=[1,2,3,6,5,1,5,6];
console.log(max(test));

//Making letterFrequency(haha=> {'h':2, 'a':2})

const letterFrequency=(phrase)=>{
    frequency={};
    
    for(const letter of phrase){
       
        if(letter in frequency){
            
        frequency[letter]++;
        
        }else{
            frequency[letter]=1
            
    
        }

    }
   console.log(frequency)

}

letterFrequency('hhaha');


///Making wordFrequency('hello Manjil hello')👉 {'hello':2, 'Manjil':1}

const wordFrequency=(phrase)=>{
    let frequencyObject={}
    array= phrase.split(' ');
    for(const words of array){
        if(words in frequencyObject){
            frequencyObject[words]++
        }else{
            frequencyObject[words]=1;
        }
    }
    console.log(frequencyObject);

}

wordFrequency('hello Manjil hello')

