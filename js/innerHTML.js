
const whatsapp = document.querySelector('.whatsapp');
const footer = document.querySelector('.footer');




whatsapp.innerHTML =`

					<div class="nav-bottom">
			           <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
			      rel="stylesheet">
			            <div class="popup-whatsapp fadeIn">
			                <div class="content-whatsapp -top"><button type="button" class="closePopup">
			                      <i class="material-icons icon-font-color">close</i>
			                    </button> 
			                   <p>  <img src="assets/img/fondomoto.jpg" width="50">  Hola , ¿en que puedo ayudarte? </p>   
			                </div>
			                <div class="content-whatsapp -bottom">
			                  <input class="whats-input" id="whats-in" type="text" Placeholder="Enviar mensaje..." />
			                    <button class="send-msPopup" id="send-btn" type="button">
			                        <i class="material-icons icon-font-color--black">send</i>
			                    </button>
			                </div>
			            </div>
			            <button type="button" id="whats-openPopup" class="whatsapp-button">
			                <div class="float" >
			 					 <i class="fa fa-whatsapp my-float"></i></div>
			            </button>
			            <div class="circle-anime"></div>
			        </div>


`;


footer.innerHTML =`
	<p >ventas-market.online </p>
	<p >Pagina de ventas todos los derechos reservados 2024</p>

`;