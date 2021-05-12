/**
 * Test Pre Hook
 * @param content 
 * @returns 
 */
export function msg(content : string) {
    return content;
}

export function is_valid(ans : boolean) {
    return ans;
}

export function say_hi(name : string) {
    return `Hi ${name}!`;
}

export function say_bye(name : string) {
    return `Good bye ${name}!`;
}

export function say_something(content : string) {
    return content;
}

export function say_bword(content : string) {
    return content;
}

export function emotion(emoji : string) {
    if(emoji==':happy:')
        return true;
    else
        return false;
}