import Swal from 'sweetalert2'

export const popupErrorCommon = (error: any, subtitle?: string) => {
  console.log(error)
  return Swal.fire({
    icon: 'error',
    title: 'Ошибка запроса!',
    html: subtitle ?? 'Обратитесь в IT department.',
    showConfirmButton: true,
  })
}
