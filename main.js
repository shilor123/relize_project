document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-list');

    if (servicesContainer) {
        fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Помилка завантаження');
                }
                return response.json();
            })
            .then(data => {
                servicesContainer.innerHTML = '';
                data.services.forEach(service => {
                    const div = document.createElement('div');
                    div.className = 'service-box';
                    div.innerHTML = `
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    `;
                    servicesContainer.appendChild(div);
                });
            })
            .catch(err => {
                servicesContainer.innerHTML = 'Не вдалося завантажити список послуг.';
                console.error(err);
            });
    }
});