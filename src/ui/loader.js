const loader = document.getElementById('loader');
export const showLoader = ()=> loader.classList.remove('hid');
export const hideLoader = ()=> loader.classList.add('hid');