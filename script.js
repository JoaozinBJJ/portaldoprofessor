window.onload = function(){
	var form = document.getElementById('login-form');
	var msg = document.querySelector('.msg');

	form.onsubmit = function(e){
		e.preventDefault();
		msg.textContent = '';
		var email = form.email.value.trim();
		var pass = form.password.value;
		if(!email){ showMessage('Por favor, informe o e‑mail.'); return false }
		if(!pass || pass.length < 6){ showMessage('Senha deve ter ao menos 6 caracteres.'); return false }

		showMessage('Entrando...', true);
		setTimeout(function(){
			showMessage('Login simulado com sucesso', true);
			form.reset();
		},850);
	};

	function showMessage(text, positive){
		msg.textContent = text || '';
		if(positive){ msg.style.color = '#065f46' } else { msg.style.color = '#b91c1c' }
	}
};

