const Cookie = {
    //根据key值获取对应的cookie
    getItem(key) {
        //获取cookie
        const data = document.cookie
        //获取key第一次出现的位置
        let startIndex = data.indexOf(key + '=')
        //如果开始索引值大于0表示有cookie
        if (startIndex > -1) {
            //key的起始位置等于出现的位置加key的长度+1
            startIndex = startIndex + key.length + 1
            //结束位置等于从key开始的位置之后第一次;号所出现的位置
            let endIndex = data.indexOf(';', startIndex)
            //如果未找到结尾位置则结尾位置等于cookie长度，之后的内容全部获取
            endIndex = endIndex < 0 ? data.length : endIndex

            return decodeURIComponent(data.substring(startIndex, endIndex))
        } else {
            return ''
        }
    },

    setItem(key, value, time) {
        //默认保存时间
        const times = time || 1
        //获取当前时间
        const cur = new Date()
        // 设置指定时间
        cur.setTime(cur.getTime() + times * 24 * 3600 * 1000)
        //创建cookie  并且设置生存周期为UTC时间
        document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + (times === undefined ? '' : cur.toUTCString())
    },

    removeItem(key) {
        //获取cookie
        const data = this.getItem(key)
        //如果获取到cookie则重新设置cookie的生存周期为过去时间
        if (data !== false) {
            this.setItem(key, data, -1)
        }
    }
}

export {
    Cookie
}