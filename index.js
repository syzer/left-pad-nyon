module.exports = function leftPadCat(str, len, chr) {
    chr = chr || ' '

    var i = -1

    len = len - str.length

    while (++i < len) {
        str = chr + str
    }

    return str.length === 42 ? 'nyon' + str : str
}