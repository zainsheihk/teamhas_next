import { toast } from 'react-toastify';



export const ToastSuccess = (title) => {
    toast.dismiss()
    toast.success(`${title}`, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        theme: "dark",
    });
}
export const ToastInfo = (title) => {
    toast.dismiss()
    toast.info(`${title}`, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        theme: "dark",
    });
}
export const ToastWarn = (title) => {
    toast.dismiss()
    toast.warning(`${title}`, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        theme: "dark",
    });
}
export const ToastError = (title) => {
    toast.dismiss()
    toast.error(`${title}`, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        theme: "dark",  
    });
}