var numCaracteres;
var numFone;
var valFone;
var v;
$(document).ready(function() {
	
	if ($('.mask').length > 0) {
		$('.fld_NumeroDaLinha').live("keyup", function(){
		   valFone = textCounter(this.form.fld_NumeroDaLinha,this.form.fld_NumeroDaLinha.length,10, null);

			if (valFone.indexOf("-") > 0){
				valFone = valFone.replace("-","");	
			} 
			//checa se o valor é número
			if (isNaN(valFone)){
				valFone = $(this).val("");
			}
			//console.log("Novo valor "+valFone);
			numCaracteres = valFone.length;

			if(numCaracteres > 9){
				valFone = valFone.substring(0,9);
				$(this).val(valFone);
			}

			chamaMascara(numCaracteres, valFone);
		});
	};

});
//contador caracteres
function textCounter(field, countfield, maxlimit, numFone) {	

	if (numCaracteres >= 8){
    	field.value = field.value.substring(0, maxlimit);
	} else {
    	countfield = maxlimit - numCaracteres;
	}
	numFone = field.value;
	return numFone;
}


function chamaMascara (numCaracteres, valFone) {
	//console.log("numCaracteres ", numCaracteres);
	if (numCaracteres >= 9) {
		Mascara(this, TelefoneNoveD);
	} else if (numCaracteres >= 4 && numCaracteres <= 8){
		Mascara(this, Telefone);
	}
}

/*Função Pai de Mascaras*/
function Mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
}
/*Função que Executa os objetos*/
function execmascara(){	
    v_obj.value=v_fun(v_obj.value);
}

/*Função que padroniza telefone (11) 4184-1241*/
function Telefone(v){             
    v=valFone.replace(/(\d{4})(\d)/,"$1-$2");
	//console.log("Telefone Oito ", v);
	$(".input_mask").val(v);
	$(".fld_NumeroDaLinha").val(v);
    return v
}

/*Função que padroniza telefone 41841-1241*/
function TelefoneNoveD(v){
	v=valFone.replace(/(\d{5})(\d)/,"$1-$2");   
	//console.log("Telefone nove ", v); 
	$(".input_mask").val(v);
	$(".fld_NumeroDaLinha").val(v);
    return v;
}





