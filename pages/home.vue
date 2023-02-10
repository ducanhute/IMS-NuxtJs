<template>
    <div>
        <div class="page-wrapper">
            <!-- Preloader -->
            <!-- <div class="preloader d-none"></div> -->

            <!-- Main Header-->
            <!--End Main Header -->

            <!--Page Title-->
            <PageTitle v-if="true"> </PageTitle>
            <!--End Page Title-->

            <!--Consulting Section Two-->
            <section id="introduce" class="consulting-section-two">
                <div class="auto-container">
                    <div class="inner-container">
                        <!--Sec Title-->
                        <div class="sec-title centered">
                            <!-- <div class="title">Who We Are</div> -->
                            <h1>Sản phẩm IMS</h1>
                        </div>
                        <!-- <div class="title-text">
                            Idea of denouncing pleasure and praising pain was
                            born and we will give you a complete account the
                            system of the great explorer of the truth
                            master-builder.
                        </div> -->
                        <div class="row clearfix">
                            <!--Image Column-->
                            <div
                                class="image-column col-md-6 col-sm-12 col-xs-12"
                            >
                                <div class="image">
                                    <img
                                        src="~/assets/images/resource/consulting.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <!--Content Column-->
                            <div
                                class="content-column col-md-6 col-sm-12 col-xs-12"
                            >
                                <div class="inner-column">
                                    <!-- <h2>
                                        World’s Best
                                        <span class="theme_color"
                                            >Consulting & Finance</span
                                        >
                                        <br />
                                        Solution Provider.
                                    </h2> -->
                                    <div class="text">
                                        IMS (Hệ thống thị trường vô hạn) là công
                                        cụ cung cấp thông tin tín hiệu giao dịch
                                        ngoại hối được cung cấp từ Công ty công
                                        nghệ và tài chính MTI hàng đầu nước Mỹ
                                        và Thế giới. Các tín hiệu từ MTI cung
                                        cấp có tỉ lệ thắng đến 70%.
                                    </div>
                                    <div class="text">
                                        IMS kết nối tín hiệu từ MTI đến trực
                                        tiếp người dùng thông qua Bot Telegram
                                        vào lệnh trực tiếp từ telegram vào MT5
                                        chỉ thông qua 1 thao tác duy nhất, giúp
                                        các nhà giao dịch tiết kiệm thời gian,
                                        đơn giản và hiệu quả.
                                    </div>
                                    <button
                                        class="btn-lg"
                                        style="border: 1px solid gray"
                                    >
                                        Tìm hiểu thêm
                                    </button>
                                    <!-- <div class="author">
                                        Nathan Missoray,
                                        <span class="theme_color"
                                            >CEO & Founder</span
                                        >
                                    </div>
                                    <div class="signature">
                                        <img
                                            src="~/assets/images/icons/signature.png"
                                            alt=""
                                        />
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--End Consulting Section Two-->

            <!--Reason Section-->
            <WhoWeAre />
            <!--End Reason Section-->
            <!-- CombinationProducts -->
            <CombinationProducts></CombinationProducts>
            <!--End CombinationProducts -->
            <!-- MyCustomer -->
            <Customers></Customers>
            <!-- End MyCustomer -->
            <!--History Section-->
            <OursHistory v-if="false" />
            <!--End History Section-->

            <!--Team Section-->
            <TeamSection v-if="false"></TeamSection>
            <!--End Team Section-->

            <!--Dream Section-->
            <DreamSection v-if="false"></DreamSection>
            <!--End Dream Section-->
        </div>
    </div>
</template>

<script>
import WhoWeAre from '~/components/AboutPgae/WhoWeAre.vue';
import OursHistory from '~/components/AboutPgae/OursHistory.vue';
import TeamSection from '~/components/AboutPgae/TeamSection.vue';
import DreamSection from '~/components/AboutPgae/DreamSection.vue';
import PageTitle from '~/components/AboutPgae/PageTitle.vue';
import CombinationProducts from '~/components/AboutPgae/CombinationProducts.vue';
import Customers from '~/components/AboutPgae/MyCustomer.vue';

export default {
    name: 'HeroHome',
    components: {
        WhoWeAre,
        OursHistory,
        TeamSection,
        DreamSection,
        PageTitle,
        CombinationProducts,
        Customers,
    },
    data() {
        return {
            item1: [
                {
                    id: '1',
                    text1: 'Thương hiệu Co-brand MTI',
                    text2: 'Giao thức tương tác telegram chỉ qua 2 bước bắt đầu',
                },
                {
                    id: '2',
                    text1: 'Xây dựng mạng lưới trước,lan tỏa nhà giao dịch sau',
                    text2: 'Mang lại hiệu quả tối ưu',
                },
                {
                    id: '3',
                    text1: 'Chênh lệch BV và quy đổi hoa hồng thấp ',
                    text2: 'Tạo ra thu nhập hấp dẫn',
                },
                {
                    id: '4',
                    text1: 'Phương thức thanh toán USDT',
                    text2: 'Dễ dàng kinh doanh đa quốc gia ',
                },
                {
                    id: '5',
                    text1: ' Không có tính cạnh tranh về sàn forex',
                    text2: 'Giao dịch mở ở mọi sàn forex',
                },
                {
                    id: '6',
                    text1: 'Đội ngũ chuyên nghiệp trong ngành',
                    text2: 'Hỗ trợ tối ưu',
                },
            ],
        };
    },
};
</script>
