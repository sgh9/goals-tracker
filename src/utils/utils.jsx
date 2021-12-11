export const uuid = ()=> {
    let dateStamp = Math.floor(new Date().getTime() * 1000000);
    let uniqueId = Math.random() * dateStamp; 
    return uniqueId;
}