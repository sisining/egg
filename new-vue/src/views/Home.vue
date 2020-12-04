<template slot-scope="scope">
    <div>
        <Table :columns="columns" :data="allData">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">更新</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>

    </div>
</template>

<script>
    import {deleteOne, getDate} from "../network";

    export default {
        name: "Home",
        // props: {
        //     allData: {
        //         type: Array,
        //     },
        // },

        data() {
            return {
                allData: [],
                columns: [
                    {
                        title: '#id',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    }, {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ]
            }
        },
        created() {
            this.getDate()
        },
        methods: {
            itemClick() {
                this.$router.push('/create')
            },
            getDate() {
                getDate().then(res => {
                    console.log(res.data)
                    this.allData = res.data
                    console.log('56788')
                })
            },
            remove(index) {
                console.log(index)
                 console.log(this.allData[index].id)
                let thisId=this.allData[index].id
                deleteOne(thisId).then(res => {
                    console.log(res)
                })
                this.allData.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 10px 0 10px 10px;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
