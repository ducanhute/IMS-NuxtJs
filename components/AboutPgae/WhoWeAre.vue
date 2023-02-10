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
                    <h2>TẠI SAO NÊN CHỌN IMS - INFINITY MARKET SYSTEM?</h2>
                </div>

                <div class="row clearfix">
                    <!--Dream Block-->
                    <div
                        class="dream-block col-lg-4 col-md-6 col-sm-6 col-xs-12"
                        v-for="(item, index) in item1"
                        :key="index"
                    >
                        <div
                            class="inner-box inner-box-custom custom-block-reason"
                        >
                            <div v-if="item.des" class="text pb-4">
                                {{ item.title }}
                            </div>
                            <h3 class="text-white">{{ item.des }}</h3>
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
                    title: 'Thương hiệu Co-brand MTI',
                    des: 'Giao thức tương tác telegram chỉ qua 2 bước bắt đầu',
                },
                {
                    title: 'Xây dựng mạng lưới trước,lan tỏa nhà giao dịch sau',
                    des: 'Mang lại hiệu quả tối ưu',
                },
                {
                    title: 'Chênh lệch BV và quy đổi hoa hồng thấp ',
                    des: 'Tạo ra thu nhập hấp dẫn',
                },
                {
                    title: 'Phương thức thanh toán USDT',
                    des: 'Dễ dàng kinh doanhđa quốc gia',
                },
                {
                    title: 'Không có tính cạnh tranh về sàn forex',
                    des: 'Giao dịch mở ở mọi sàn forex',
                },
                {
                    title: 'Đội ngũ chuyên nghiệp trong ngành',
                    des: 'Hỗ trợ tối ưu',
                },
            ],
        };
    },
};
</script>
