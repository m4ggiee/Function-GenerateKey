function generateKey(length,  characters){
    let result = ''
    for(let i = 0; i<=length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 