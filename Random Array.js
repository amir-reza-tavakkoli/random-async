async function delay(array) {
    let promises=[];

    for (const item of array) {
        let delay = getRandomDelay();
        let promise = new Promise(function(resolve, reject){
            setTimeout((item, delay) => {console.log(item);resolve("done")}, delay, item, delay)
        });
        promises.push(promise);
        let result = await promise;
    }

    console.log(promises);
    Promise.all(promises).then(resolve => console.log("done"));
}

delay([2,3,4])

function getRandomDelay() {
    const randomDelay = Math.floor(Math.random() * 999) + 1;
    return randomDelay;
}