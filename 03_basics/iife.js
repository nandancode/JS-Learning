(function chai(){
    console.log("trying iife")
})();

((name) => {
    console.log(`hi ${name}`)
})("nandan")