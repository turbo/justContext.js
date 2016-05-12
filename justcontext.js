/* Avoiding jQuery || git.io/zQuery */
function onDOMReady(f){/in/.test(document.readyState)?setTimeout(arguments.callee.name+'('+f+')',9):f()}
function isNotBatman(a,h){for(;a&&a!==document;a=a.parentNode){if(a.classList.contains(h.substr(1))){return 1}}}
function fadeElement(a,b){if(b!=='show'){return a.style.opacity=setTimeout(function(){a.style.display='none'},200)*0}a.style.display='block';setTimeout(function(){a.style.opacity=1},30)}
function addListener(a,b,c){((typeof a=="string")?document.querySelector(a):a).addEventListener(b,c)}

/* The actual jCtx code || git.io/justContext.js */
onDOMReady(function(){
	Array.from(document.querySelectorAll(".jctx-host")).forEach((z,i)=>{
		addListener(z,"contextmenu",function(event){
			Array.from(document.querySelectorAll(".jctx")).forEach((k,i)=>{k.style.display='none'});
			event.preventDefault();
			var mID='';
			Array.from(z.classList).forEach((y,i)=>{if(~y.indexOf("jctx-id-")){mID='.'+y}});
			x=document.querySelector(".jctx"+mID);
			var maxLeft=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)-10-x.getBoundingClientRect().width;
			var maxTop=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-10-x.getBoundingClientRect().height;
			fadeElement(x,'show');
			x.style.left=(event.pageX>maxLeft?maxLeft:event.pageX)+"px",
			x.style.top=(event.pageY>maxTop?maxTop:event.pageY)+"px"
		})
	});
	Array.from(document.querySelectorAll(".jctx li")).forEach((x,i)=>{
		addListener(x,"click",function(){
			if(eval("typeof(handleMenuAction)==typeof(Function)")&&!x.classList.contains("disabled")) handleMenuAction(x.getAttribute("data-action"));
			fadeElement(x.parentElement,'hide')
		})
	});
	addListener(document,"mousedown",function(e){
		if(!isNotBatman(e.target,".jctx-host")) Array.from(document.querySelectorAll(".jctx")).forEach((x,i)=>{fadeElement(x,'hide')})
	})
});