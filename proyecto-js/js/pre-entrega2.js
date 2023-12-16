// Seccion con funciones globales

const existeCompradorId = (array, idReferencia) => {
    let existe = array.some(elemento => elemento.id === idReferencia);
    return existe;
};


//Sección de Compra de Camisetas

let userId = 1;
let usuarios =[]

class Usuario {
    constructor(camiseta, talla, nombre, apellido, email) {
        this.camiseta = camiseta;
        this.talla = talla;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.id = userId;
    }
};

const compraUsuario = (usuario) => {
    usuarios.push(usuario);
    userId++
};

const eliminarUsuario = (id) => {
    if (existeCompradorId(usuarios,id)) {
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    } else {
        alert("No existe ningun comprador de camiseta con este ID");
    }
};

const camisetaUsuarios = () => {
    let nombresUsuarios = usuarios.map ( usuario => `ID: ${usuario.id} - Nombre ${usuario.nombre}`);
    if (nombresUsuarios.length > 0) {
        alert (nombresUsuarios.join("\n"));
    } else {
        alert ("No hay usuarios registrados")
    }
};


//Menú Principal de la Aplicación

const menuCompraCamisetas = () => {
    let estado = true;

    while ( estado ) {
        let opcion = parseInt (
            prompt (
                `
                Bienvenido al Menú Compras de Camisetas de Fútbol. 
                Elija Cual quiere comprar:
                1- Camiseta que desea comprar
                2- Mostrar Usuarios que compran camisetas
                3- Eliminar Usuarios 
                4- Volver al Menú Principal
                `
            )
        );
        
        switch ( opcion ) {
            case 1:
                let camiseta = prompt("Manchester City, Real Madrid o Barcelona")
                let talla = prompt(`Ingrese que talla quiere de Camiseta:
                    S (Small), M (Medium) o L (Large)`);
                let nombre = prompt("Ingrese el nombre del Usuario que compra");
                let apellido = prompt("Ingrese el apellido del usuario que compra");
                let email = prompt("Ingrese el email del usuario que compra");
                let usuario = new Usuario (camiseta, talla, nombre, apellido, email);
                compraUsuario(usuario);
                break;
            case 2:
                camisetaUsuarios();
                break;
            case 3:
                let idUsuario = parseInt(prompt("Ingrese el numero de ID del usuario para poder eliminarlo"));      
                    if (!isNaN(idUsuario)) {
                        eliminarUsuario(idUsuario);
                    } else {
                        alert("Por favor, ingrese un número válido para el ID del usuario.");
                    }
                break;
            case 4:
                estado = false;
                menuPrincipal();
                break;
            default:
                alert ("Compre alguna Camiseta de Fútbol o Vuelva al Menú Principal con el numero 4");
        }        
    }
};

let estado = true;
const menuPrincipal = () => {
    while( estado ) {
        let opcion = parseInt(
            prompt(
                `
                Bienvenidos a la Compra y Venta de Camisetas de Fútbol:
                1- Comprar Camisetas de fútbol.
                2- Salir
                `
            )
        );
    switch ( opcion ) {
        case 1:
            menuCompraCamisetas();
        break;
        case 2:
            estado = false;
        break;
        default:
            alert ("Ingrese alguna opción válida o Salga con la opción 3")
            break;
    }
    }
}

menuPrincipal();


