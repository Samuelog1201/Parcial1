class myComponent extends HTMLElement {}
    constructor(); {
    super();}
    this.attachShadow{(mode:`open`)} {
        
    }

    connectedCallback();{
      this.render();
    
    }  
  static get observerAttributes{}{
    render(`title`,`descripcion`, `value`,`InStock`,`image`)
}

attributeChangedCallback(propname, oldVal, newVal);{
    this[propname]=newVal  
    this.render();
}
render();{
    this.attachShadow({})
}
