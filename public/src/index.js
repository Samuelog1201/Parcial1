const data = require('./data.json');
import Card from './components/card/card';

class Container extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		data.forEach((element) => {
			this.shadowRoot.innerHTML += `
		  <turismo-card
		    image="${element.image}"
		    destino="${element.destino}"
		    duracion="${element.duracion}">
            costo="${element.costo}">
            descripcion="${element.descripcion}">
            actividades="${element.actividades}">
            reservado="${element.reservado}">
            calificacion="${element.calificacion}">
            alojamiento="${element.alojamiento}">
            guia_incluido="${element.guia_incluido}">
		  </turismo-card>
			`;
		});
	}
}
customElements.define('Container', Container);
export default Container;