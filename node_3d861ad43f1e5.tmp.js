<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beba água!</title>
    <link rel="stylesheet" href="./style.css">
    
</head>
<body>
    <header>
        <h1>Beba água!</h1>
    </header>
    
    <section>
        <h4>Meta</h4>
        <div>
            Litros:
            <div id="lt-box" class="ltmlbox">
                <label>
                    <button class="plus_minus_buttons" onclick="btn_remove_1l()">
                        <img src="./assets/minus_circle.svg" class="img_buttons"/>
                    </button>

                    <input type="number" min="0" value="0" id="litros" class="inp_quant">

                    <button class="plus_minus_buttons" onclick="btn_add_1l()">
                        <img src="./assets/plus_circle.svg" class="img_buttons"/>
                    </button>
                </label>
            </div>
            
            Mililitros:
            <div id="ml-box" class="ltmlbox">
                <label>
                    <button class="plus_minus_buttons" onclick="btn_remove_100ml()">
                        <img src="./assets/minus_circle.svg" class="img_buttons"/>
                    </button>

                    <input type="number" min="0" value="000" id="milil" class="inp_quant">

                    <button class="plus_minus_buttons" onclick="btn_add_100ml()">
                        <img src="./assets/plus_circle.svg" class="img_buttons"/>
                    </button>
                </label>
            </div>
            <input type="button" value="Adicionar" onclick="adicionar()" id="add_button">
            
        </div>
        <div id="botoes">
            <input type="button" value="Add. 100ml" class="add_ml_buttons" onclick="add100()">
            <input type="button" value="Add. 300ml" class="add_ml_buttons" onclick="add300()">
            <input type="button" value="Add. 500ml" class="add_ml_buttons" onclick="add500()">
            <input type="button" value="Add. 1L" class="add_ml_buttons" onclick="add1k()">
        </div>
        <p>Quantidade absorvida até o momento:</p>

        
        <div id="res">
            
        </div>

        <div id="div_limpar">
            
        </div>
    </section>
    <script src="./script.js"></script>
</body>
</html>
