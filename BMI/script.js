const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const h=parseFloat(document.querySelector('#height').value);
    const w=parseFloat(document.querySelector('#weight').value);
    const res=document.querySelector('#ans');
    const con=document.querySelector('#conclusion');
    if(h<1 || isNaN(h)){
        res.innerHTML='<h2>Enter a valid height!</h2>';
         con.innerHTML=``
    }
    else if(w<1 || isNaN(w)){
        res.innerHTML='<h2>Enter a valid weight!</h2>';
         con.innerHTML=``
    }
    else{
        const bmi=(w/(h*h)).toFixed(4)
        res.innerHTML=`<h2>Your BMI is: ${bmi}</h2>`
        if(bmi<18.6){
            con.innerHTML=`<h3>You are underweight</h3>`
            con.style.color=`red`;
        }
        else if(bmi>24.9){
            con.innerHTML=`<h3>You are overweight</h3>`
            con.style.color=`red`;
        }
        else{
            con.innerHTML=`<h3>You are fit</h3>`
            con.style.color=`green`;
        }
    }
})