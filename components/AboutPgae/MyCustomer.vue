<template>
    <div>
        <!--Mycustomer-->
        <!--Testimonial Section Three-->

        <section class="testimonial-section-three">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="title-box text-center">
                        <h2
                            class="text-black font-weight-bold text-center w-100 mb-5"
                        >
                            KHÁCH HÀNG CỦA CHÚNG TÔI
                        </h2>
                    </div>

                    <div class="row clearfix">
                        <!--Testimonial Block Three-->
                        <div
                            v-for="(item, index) in item1"
                            :key="index"
                            class="testimonial-block-three col-lg-3 col-md-4 col-sm-6 col-xs-12"
                        >
                            <div class="inner-box">
                                <div class="image">
                                    <img
                                        src="images/resource/author-3.jpg"
                                        alt=""
                                    />
                                    <div class="overlay-box">
                                        <div class="overlay-inner">
                                            <h3>
                                                Executive <br />
                                                Jupiter Solutions
                                            </h3>
                                            <div
                                                class="quote-icon flaticon-right-quote"
                                            ></div>
                                        </div>
                                    </div>
                                    <!--Overlay Box Two-->
                                    <div class="overlay-box-two">
                                        <div class="overlay-inner-two">
                                            <div class="content">
                                                <div
                                                    class="overlay-icon-two flaticon-right-quote"
                                                ></div>
                                                <div class="overlay-text-two">
                                                    Description of image
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lower-box text-center">
                                    <h2>
                                        <a href="#">{{ item.title }}</a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Testimonial Section Three-->
        <!--End Mycustomer-->
    </div>
</template>

<script>
export default {
    name: 'MyCustomer',
    data() {
        return {
            item1: [
                {
                    title: 'Chủ và Giám đốc sàn Forex',
                },
                {
                    title: 'Agency - MIB - IB ',
                },
                {
                    title: 'Các nhà giao dịch',
                },
                {
                    title: 'HR truyền thống',
                },
                {
                    title: 'Nhà đầu tư bất động sản Bảo hiểm',
                },
                {
                    title: 'Cộng đồng MMO Affiliate',
                },
                {
                    title: 'Nhân viên văn phòng',
                },
                {
                    title: 'Nhân viên văn phòng',
                },
            ],
        };
    },
};
</script>
