    //FITUR-FITUR ESC//
    //1.Deklarasi Variable let dan const//

    /* 
    let : blockscope, nilainya masih bisa berubah namun tidak
    dapat dideklarasikan ulang
    const : blockscope, nilainya tetap, (tidak dapat berubah)
    serta tidak dapat dideklarasikan ulang
    */

    //Contoh let
    let nama ="ucup";
    console.log(nama)
    {
        let nama ="rezky"
    console.log(nama)
    }
    nama ="rendy"
    console.log(nama)

    //Contoh Const
    const phi = Math.PI
    console.log(phi)
    {
        const phi = 200
        console.log (phi)
    }





    //2. Arrow Function dan Template literals
    /*
        Arrow Function : Fungsi panah -> Lebih fleksibel, mudah dipahami dan cepat
    */

    // Declaration Function
    function SayHelloDeclare(nama) {
        console.log(`Hello, `+nama);
    }
    SayHelloDeclare("Ucup");

    // Expression Function
    const SayHelloExpression = function
    SayHelloExpression(){
            console.log("Hello, saya dari expression");
    }
    SayHelloExpression();

    // Arrow Function
    const SayHelloArrow = () => {
        console.log("Hello, saya dari arrow")
    }
    SayHelloArrow();

