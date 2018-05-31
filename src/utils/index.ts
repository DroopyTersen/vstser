
export const getClassName = function(classes: string[]) {
    return classes.filter(c => c).join(" ");
}