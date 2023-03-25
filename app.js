window.onload=function(){
    
    // console.log(123);
    const customerImage= document.getElementById('customer-img');
    // console.log(customerImage);
    const customerName= document.getElementById('customer-name');
    // console.log(customerName);
    const customerText= document.getElementById('customer-text');
    // console.log(customerText);

    const btn=document.querySelectorAll('.btn')

    let index=0
    const customers =[]

    function Customer(img,name,text){
        this.img=img;
        this.name=name;
        this.text=text;

    }

    function createCustomer(img,name,text){
        let Img =`./images/${img}.jpg`
        let customer = new Customer(Img,name,text)

        customers.push(customer)

    }

    createCustomer(0,'GPT','As an AI language model, I do not have feelings like humans do. I am a computer program designed to respond to your questions and provide information to the best of my abilities. However, I am always ready to assist you with any queries or concerns you may have')
    createCustomer(1,'IBM','Another important of quantum computing is entanglement, which allows two qubits to be linked in such a way that their properties are correlated. This can be used to perform operations on multiple qubits at once, which can further speed up certain types of calculations.')
    createCustomer(2,'mandy','Another aspect of quantum computing is entanglement, which allows two qubits to be linked in such a way that their properties are correlated. This can be used to perform operations on multiple qubits at once, which can further speed up certain types of calculations.')
    createCustomer(3,'judy',' important aspect of quantum computing is entanglement, which allows two qubits to be linked in such a way that their properties are correlated. This can be used to perform operations on multiple qubits at once, which can further speed up certain types of calculations.')

    console.log(btn);
    btn.forEach((button)=>{
        // console.log(button);

        button.addEventListener('click',function(e){
            console.log(e);
            console.log(e.target.classList);
            if(e.target.classList.contains('prevBtn')){
                if(index ===0){
                    index = customers.length
                }
                index--
                customerImage.src=customers[index].img
                customerName.textContent = customers[index].name;
                // console.log(customerName)
                customerText.textContent= customers[index].text
                // console.log(customerName)
                // console.log(customerText)
            }

            if(e.target.classList.contains('nextBtn')){
                if(index === customers.length){
                    index = 0
                }
                index++
                customerImage.src=customers[index].img
                customerName.textContent = customers[index].name;
                // console.log(customerName)
                customerText.textContent= customers[index].text
            }
            // console.log(customerName)
            
        })
    })


}