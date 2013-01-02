var MaskNineDigit = Class.create();

MaskNineDigit.prototype = Object.create();

MaskNineDigit.prototype = {
	initialize : function (selector) 
	{
	    var elements = document.querySelectorAll(selector), i;
		var valElement = MaskNineDigit.prototype.textCounter(this.form.elements,this.form.elements.length,10, null);

		if (this.length > 0) {
			this.onkeyup = function(){
				if (valElement.indexOf("-") > 0) {
					valElement = valElement.replace("-", "");
				};
				//checa se o valor é número
				if (isNaN(valElement)){
					valElement = this.value;
				}
				//console.log("Novo valor "+valFone);
				numCaracteres = valElement.length;

				if(numCaracteres > 9){
					valElement = valElement.substring(0,9);
					this.value(valFone);
				}

				MaskNineDigit.prototype.initMask(numCaracteres, valElement);

			}
		}; 
	}, 
	
	setup : function()
	{
		console.log("ola");
	}
}

var mask = new MaskNineDigit('.mask');
mask instanceOf MaskNineDigit;
mask.setup();

console.log(mask);


MaskNineDigit.prototype.build = function()
{
	MaskNineDigit.prototype.textCounter();
}

MaskNineDigit.prototype.textCounter = function(field, countfield, maxlimit, numFone) 
{//contador caracteres

	if (numCaracteres >= 8){
    	field.value = field.value.substring(0, maxlimit);
	} else {
    	countfield = maxlimit - numCaracteres;
	}
	numFone = field.value;
	
	return numFone;
}

MaskNineDigit.prototype.initMask = function(numCaracteres, valFone)
{
	if (numCaracteres >= 9) {
		Mascara(this, TelefoneNoveD);
	} else if (numCaracteres >= 4 && numCaracteres <= 8){
		Mascara(this, Telefone);
	}
}

/*Função Pai de Mascaras*/
MaskNineDigit.prototype.maskObj = function(o,f)
{
    v_obj=o;
    v_fun=f;
    setTimeout("MaskNineDigit.prototype.execmascara()",1);
}

/*Função que Executa os objetos*/
MaskNineDigit.prototype.execmascara = function()
{	
    v_obj.value=v_fun(v_obj.value);
}

/*Função que padroniza telefone (11) 4184-1241*/
MaskNineDigit.prototype.telefone = function(v)
{             
    v=valFone.replace(/(\d{4})(\d)/,"$1-$2");
	//console.log("Telefone Oito ", v);
	$(".input_mask").val(v);
	$(".fld_NumeroDaLinha").val(v);
    return v;
}

/*Função que padroniza telefone 41841-1241*/
MaskNineDigit.prototype.TelefoneNoveD = function (v)
{
	v=valFone.replace(/(\d{5})(\d)/,"$1-$2");   
	//console.log("Telefone nove ", v); 
	$(".input_mask").val(v);
	$(".fld_NumeroDaLinha").val(v);
    return v;
}