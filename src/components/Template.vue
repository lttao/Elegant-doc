<template>
    <div>
        <div class="title">{{ data.name }}</div>

        <div class="module">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {}
        }
    },
    watch: {
        '$route'(to, from) {
            const { name } = to.params
            this.getData(name)
        }
    },
    created() {
        const { name } = this.$route.params
        this.getData(name)
    },
    methods: {
        getData(compoentName) {
            this.getJson(compoentName).then(res => {
                this.data = res
            })
        },
        getJson(jsonName) {
            return new Promise((resolve, reject) => {
                var url = `/src/doc/${jsonName}.json` /*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
                var request = new XMLHttpRequest()
                request.open("get", url) // 设置请求方法与路径
                request.send(null) // 不发送数据到服务器

                // XHR对象获取到返回信息后执行
                request.onload = function() {
                    // 返回状态为200，即为数据获取成功
                    if (request.status == 200) {
                        try {
                            resolve(JSON.parse(request.responseText))
                        } catch(e) {
                            resolve({})
                        }
                    } else {
                        reject(request)
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.title {
    font-weight: bold;
    line-height: 50px;
    font-size: 20px;
}
.module {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px #ccc;
    padding: 20px;
}
</style>