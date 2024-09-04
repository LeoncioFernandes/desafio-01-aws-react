function redirecionarUrl(url, delay = 0){
    setTimeout(() => {
        window.location.href = url;
    }, delay)
}