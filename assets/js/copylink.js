var btns=document.querySelectorAll('.mylink');
for(var i=0;i<btns.length;i++){
	btns[i].addEventListener('mouseleave',clearTooltip);
	btns[i].addEventListener('blur',clearTooltip);
	}
function clearTooltip(e){
	e.currentTarget.setAttribute('class','mylink');
	e.currentTarget.removeAttribute('aria-label');
	}
function showTooltip(elem,msg){
	elem.setAttribute('class','mylink tooltipped tooltipped-n');
	elem.setAttribute('aria-label',msg);
	}


var clipboard = new ClipboardJS('.mylink', {
		text: function(trigger) {
						
		var url = new URL('figiep/'+ trigger.getAttribute('data-link'), window.location);


        return url.toString();
		}
	});

clipboard.on('success', function(e) {    
	showTooltip(e.trigger,'Lien direct copié !');		
    e.clearSelection();
}); 