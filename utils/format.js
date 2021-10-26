function phoneNumber(input) {
    console.log(input);
    let cleaned = ("" + input).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
}

export { phoneNumber };
