import Swal from 'sweetalert2'


export const swalSuccess = (orderId) => {
    Swal.fire({
        icon: 'success',
        title: 'Su orden de compra se ha completado',
        text: `Su codigo de referencia es: ${orderId}`
    });
}

export const swalError = () => {Swal.fire({
        icon: 'error',
        title: 'Su orden de compra no se ha completado correctamente',
        text: `Este producto no dispone del stock que usted esta intentando comprar `
    });
}