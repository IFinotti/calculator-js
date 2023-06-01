function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.clickBtn();
            this.enter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },  

        solve() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida!');
            }

        },

        enter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.solve();
                }
            });
        },

        clickBtn(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.delOne();
                }
                if(el.classList.contains('btn-eq')) {
                    this.solve();
                }
            });
        },

        btnDisplay(valor) {
            this.display.value += valor;
        } 
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
