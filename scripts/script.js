function redirecionarUrl(url, delay = 0, newTab = false){
    setTimeout(() => {
        if (newTab) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    }, delay);
}