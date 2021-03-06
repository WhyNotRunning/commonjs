$.alert = function(message) {
	var $dialog = $('<div class="modal hide fade top" role="dialog"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="text-center">Alert</h4></div><div class="modal-body"><h3>'+message+'</h3></div><div class="modal-footer"><div class="btn-group"><button type="button" class="continue btn btn-success">OK</button></div></div></div>');
	$dialog.on('click', 'button.continue', function(e){
		$dialog.modal('hide');
	});
	$dialog.on('hidden', function(e){
		$dialog.remove();
	});
	$('body').append($dialog);
	$dialog.modal('show');
	$(document).keyup(function(e){
		e.preventDefault();
		if (e.which == 13 || e.which == 27) $dialog.find('button.continue').first().trigger('click'); // Ent or Esc
		return false;
	});
};
$.confirm = function(message, callback) {
	var $dialog = $('<div class="modal hide fade top"><div class="modal-header"><h4 class="text-center">Confirm</h4></div><div class="modal-body"><h3>'+message+'</h3></div><div class="modal-footer"><div class="btn-group"><button type="button" class="btn btn-danger cancel">Cancel</button><button type="button" class="continue btn btn-success">Continue</button></div></div></div>');
	$dialog.on('click', 'button.cancel', function(e){
		callback(false);
		$dialog.modal('hide');
	});
	$dialog.on('click', 'button.continue', function(e){
		callback(true);
		$dialog.modal('hide');
	});
	$dialog.on('hidden', function(e){
		$dialog.remove();
	});
	$('body').append($dialog);
	$dialog.modal('show');
	$(document).keyup(function(e){
		e.preventDefault();
		if (e.which == 13) $dialog.find('button.continue').first().trigger('click'); // Ent
		else if (e.which == 27) $dialog.find('button.cancel').first().trigger('click'); // Esc
		return false;
	});
}
