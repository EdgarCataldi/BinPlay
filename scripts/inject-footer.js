document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/partials/footer.html');
        if (!response.ok) throw new Error('Error cargando el footer');
        
        const footerHtml = await response.text();
        document.getElementById('app-footer').innerHTML = footerHtml;
    } catch (error) {
        console.error('No se pudo cargar el footer:', error);
    }
});