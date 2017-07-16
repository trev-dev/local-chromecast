module.exports = {

    getObj: function(string) {

        return {

            name: string.substring(0, string.lastIndexOf('.') -1).replace(/[-_.]/g, ' '),
            uri: encodeURIComponent(string)

        }

    }


}