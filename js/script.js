const checkReplace = document.querySelector('.replace-me');

if(checkReplace !== null){
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        seperator: ',',
        loopCount: 'infinite',
        autoRun: true,
    })
}