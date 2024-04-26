

class StandExpo {

    constructor(element) {
        this.element = element;
    }

    select(clase){
        this.element.classList.add(clase)
    }

    setNombreEmpresa(nombre) {
       this.element.setAttribute("nombreEmpresa", nombre)
    }

    static findByName(name) {
        return new StandExpo(document.getElementById(name))
    }
}



const standExpo = StandExpo.findByName("stand2022")


standExpo.select("nueva")
standExpo.setNombreEmpresa("Expotrade")