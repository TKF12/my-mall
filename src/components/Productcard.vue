<template>
    <div class="Productcard">
        <div class="list van-hairline--bottom">
            <div class="list-image">
                <img
                    :src="url[0]"
                />
            </div>
            <div class="content">
                <p class="title">{{title}}</p>
                <p class="describe">{{describe}}</p>
                <div class="label">
                    <div v-for="n in label" :key="n">{{n}}</div>
                </div>
                <div class="operate">
                    <span class="price">{{price}}</span>
                    <button class="add">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['url', 'title', 'describe', 'label', 'price'],
};
</script>

<style lang="less" scoped>
.overflow-hide {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 170px;
}
.Productcard {
    width: 100%;
    .list {
        width: 296px;
        height: 100px;
        display: flex;
        .list-image {
            width: 90px;
            height: 90px;
            margin-right: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .content {
            flex: 1;
            .title {
                font-size: 13px;
                margin-top: 5px;
                width: 170px;
                .overflow-hide();
                color: #1a1a1a;
            }
            .describe {
                font-size: 12px;
                margin-top: 5px;
                color: #aaa;
                .overflow-hide();
            }
            .label {
                margin-top: 4px;
                display: flex;
                .overflow-hide();
                div {
                    color: #aaa;
                    border-radius: 4px;
                    border: 1px solid #aaa;
                    font-size: 10px;
                    padding: 2px;
                    margin-right: 5px;
                }
            }
            .operate {
                .overflow-hide();
                margin-top: 4px;
                display: flex;
                justify-content: space-between;
                .price {
                    color: #ff1a90;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
    }
}
</style>
