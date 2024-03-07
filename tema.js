document.querySelector('#btTrocaTema').addEventListener('click', () => {
    // pegar o elemento com o tema 
    //se o tema for light, mude para dark
    // se não, mude para light//
    if ( document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema' , 'dark');
    } else {
        document.documentElement.setAttribute('data-tema' , 'light');
    }
});