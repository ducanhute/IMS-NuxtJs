<template lang="html">
    <!--Main Footer-->
    <footer id="contact" class="main-footer">
        <div class="auto-container">
            <!--Upper Box-->
            <div class="upper-box mb-0">
                <div class="row clearfix d-flex justify-content-between">
                    <!--Footer Logo-->
                    <div class="logo-column col-lg-4 col-sm-6 col-xs-12">
                        <div class="logo mb-5">
                            <a href="#"
                                ><img
                                    src="~/assets/images/logo-header.png"
                                    alt=""
                                    width="130px"
                            /></a>
                        </div>
                        <p class="text-white">
                            IMS - công cụ cung cấp thông tin tín hiệu giao dịch
                            ngoại hối tỉ lệ thắng đến 70%.
                        </p>
                        <p class="text-white">
                            Sản phẩm được phân phối từ Công ty công nghệ và tài
                            chính MTI hàng đầu nước Mỹ.
                        </p>
                    </div>
                    <div class="logo-column col-lg-4 col-sm-6 col-xs-12 mt-5">
                        <h2 class="text-white mb-md-5">Liên hệ</h2>
                        <ul class="text-white">
                            <li>Địa chỉ :</li>
                            <li>Email :</li>
                            <li>Hotline :</li>
                        </ul>
                    </div>
                    <div class="logo-column col-lg-4 col-md-12 col-xs-12 mt-5">
                        <h2 class="text-white">Kết nối với chúng tôi</h2>
                        <div class="wrap-form-icon w-100">
                            <div
                                class="item d-flex justify-content-left mt-md-3 mt-2 align-items-center"
                            >
                                <div class="">
                                    <img
                                        src="@/assets/icons/footerIcon1.png"
                                        alt=""
                                    />
                                </div>
                                <form class="w-100">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Họ tên"
                                        />
                                    </div>
                                </form>
                            </div>

                            <div class="d-flex justify-content-left">
                                <div class="hori-line"></div>
                            </div>
                            <!--  -->
                            <div
                                class="item d-flex justify-content-left mt-md-3 mt-2 align-items-center"
                            >
                                <div class="">
                                    <img
                                        src="@/assets/icons/footerIcon2.png"
                                        alt=""
                                    />
                                </div>
                                <form class="w-100">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Email"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div class="d-flex justify-content-left">
                                <div class="hori-line"></div>
                            </div>
                            <!--  -->

                            <div class="wrap-btn text-right pr-md-5 py-2">
                                <button type="button" class="btn-submit">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--End Main Footer-->
</template>

<script>
export default {
    name: 'HeroFooter',
};
</script>
<style lang="scss" scoped>
.hori-line {
    width: 90%;
    background: rgb(209, 189, 189);
    height: 1px;
}

.form-control {
    border: none;
    background: none;
    outline: none;
    font-size: clamp(18px, 4vw, 10px);
}
.form-control:focus {
    background: none;
    border: none;
    box-shadow: none;
    font-weight: 500;
}
.btn-submit {
    border-radius: 30px;
    min-width: 210px;
    min-height: 50px;
    font-size: clamp(20px, 5vw, 10px);
    background: none;
    color: #fff7ac;
    border: 1px solid #fff7ac;
    margin: 20px 0;
    @media (max-width: 575px) {
        min-width: 160px;
        min-height: 40px;
    }
}

.social-icon {
    img {
        width: 30px;
        margin: 0 20px;
        @media (max-width: 991px) {
            width: 24px;
            margin: 0 10px;
        }
        @media (max-width: 575px) {
            width: 26px;
            margin: 0 22px 22px 22px;
        }
    }
}
</style>
