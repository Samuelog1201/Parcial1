class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['destino', 'duracion', 'costo', 'descripcion','actividades','reservado','imagen', 'calificacion', 'alojamiento', 'guia_incluido'];
	}

    attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue; 
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <img src="${this.imagen}"></img>
    <h1>${this.destino || 'No tiene destino'}</h1>
    <p>${this.duracion || 'No tiene duracion'}</p>
    <p>${this.costo || 'No tiene costo'}</p>
    <p>${this.descripcion || 'No tiene descripcion'}</p>
    <p>${this.actividades || 'No tiene actividades'}</p>
    <p>${this.reservado || 'No tiene reservaciones'}</p>
    <p>${this.calificacion || 'No tiene calificacion'}</p>
    <p>${this.alojamiento || 'No tiene alojamiento'}</p>
    <p>${this.guia_incluido || 'No tiene guia_incluido'}</p>
    `;
	}
}

customElements.define('turismo-card', Card);
export default Card;