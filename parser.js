module.exports = {

    getObj: function(string) {

        return {

            name: string.substring(0, string.lastIndexOf('.')).replace(/[-_.](?![0-9])/gi, ' '),
            uri: encodeURIComponent(string)

        }

    }


}