function getSwapi(params) {
    const { form, swapiPre, swapiController, swapiId, swapiLoader } = params;
    const swapiForm = document.querySelector(`.${form}`);
    this.formSubmit = async (e) => {
        e.preventDefault();
        swapiLoader.classList.remove('d-none');
        const { getSwapiData } = await import('./swapiFetch.js');
        const formURL = new FormData(swapiForm).get('url');
        const regEx = /\//;
        const hasSlash = regEx.test(formURL);
        if (hasSlash) {
            const normalizeURL = formURL.trim();
            const response = await getSwapiData(swapiForm.action, normalizeURL);
            console.log('response', response);
            this.showResponse(response, normalizeURL);
        } else {
            alert('ведите "/"');
            swapiLoader.classList.add('d-none');
        }

    }
    this.showResponse = (response, url) => {
        if (response?.status === 'success') {
            const getURLInfo = url.split('/');
            swapiController.classList.remove('d-none');
            swapiController.innerHTML = getURLInfo[0];
            const id = getURLInfo[1];
            if (id) {
                swapiId.classList.remove('d-none');
                swapiId.innerHTML = id;
            } else {
                swapiId.classList.add('d-none');
            }
            swapiPre.innerHTML = JSON.stringify(response.data, null, 2);
        } else {
            swapiController.classList.add('d-none');
            swapiId.classList.add('d-none');
            swapiPre.innerHTML = JSON.stringify(response, null, 2);
        };
        swapiLoader.classList.add('d-none');
    }
    this.init = function () {
        swapiForm.addEventListener('submit', this.formSubmit)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const swapi = new getSwapi({
        form: 'js--swapi_form',
        swapiPre: document.querySelector('.js--swapi_pre'),
        swapiController: document.querySelector('.js--swapi_controller'),
        swapiId: document.querySelector('.js--swapi_id'),
        swapiLoader: document.querySelector('.js--swapi_load')
    })
    swapi.init();
})
