<template>
    <div>
        <!--CombinationProducts-->
        <section
            class="dream-section"
            style="background-image: url('~/assets/images/background/5.jpg')"
        >
            <div class="auto-container">
                <!--Title Box-->
                <div class="title-box">
                    <h2>CÁC SẢN PHẨM KẾT HỢP ESM</h2>
                </div>

                <div class="row clearfix">
                    <!--Dream Block-->
                    <div
                        class="dream-block col-lg-6 col-md-6 col-sm-6 col-xs-12"
                        v-for="(item, index) in item1"
                        :key="index"
                    >
                        <div class="inner-box inner-box-custom">
                            <h2 class="text-white">{{ item.title }}</h2>
                            <div v-if="item.des" class="text">
                                {{ item.des }}
                            </div>
                            <div class="total-number">
                                <span class="number"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End CombinationProducts-->
    </div>
</template>

<script>
export default {
    name: 'DreamSection',
    data() {
        return {
            item1: [
                {
                    title: 'ĐÀO TẠO ',
                    des: 'Tài chính cá nhân, doanh nghiệp, quốc tế, ngoại hối',
                },
                {
                    title: 'TỔ CHỨC SỰ KIỆN',
                    des: 'Các sự kiện thường niên về forex cùng các khách hàng là 500 sàn Forex tại Việt Nam và quốc tế',
                },
                {
                    title: 'ESM: P/L ',
                    des: 'Trở thành đối tác P/L cùng ESM và IMS',
                },
                {
                    title: 'ESM BROKERAGE',
                },
            ],
        };
    },
};
</script>
