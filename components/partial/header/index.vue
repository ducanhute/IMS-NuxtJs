<template lang="html">
    <div class="fixed-top">
        <header class="main-header">
            <!-- Header Top -->

            <!-- Header Top End -->

            <!-- Main Box -->
            <div class="main-box" style="background-color: #333">
                <div class="auto-container">
                    <div class="outer-container clearfix">
                        <!--Logo Box-->
                        <div class="logo-box">
                            <a href="home"
                                ><img
                                    src="~/assets/images/logo-header.png"
                                    alt=""
                                    width="100px"
                            /></a>
                        </div>

                        <!--Nav Outer-->
                        <div class="nav-outer clearfix">
                            <!-- Main Menu -->
                            <nav class="main-menu">
                                <div class="navbar-header">
                                    <!-- Toggle Button -->
                                    <button
                                        type="button"
                                        class="navbar-toggle"
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse"
                                    >
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                                <div class="navbar-collapse collapse clearfix">
                                    <ul class="navigation clearfix">
                                        <li class="current dropdown">
                                            <a href="home">Trang chủ</a>
                                            <!-- <ul>
                                            <li><a href="index.html">Homepage 1</a></li>
                                            <li><a href="index-2.html">Homepage 2</a></li>
                                            <li><a href="index-3.html">Homepage 3</a></li>
                                            <li class="dropdown"><a href="#">Header Styles</a>
                                                <ul>
                                                    <li><a href="index.html">Header Style One</a></li>
                                                    <li><a href="index-2.html">Header Style Two</a></li>
                                                    <li><a href="index-3.html">Header Style Three</a></li>
                                                </ul>
                                            </li>
                                        </ul> -->
                                        </li>
                                        <li class="dropdown">
                                            <a href="#introduce">Giới thiệu</a>
                                            <!-- <ul>
                                                <li>
                                                    <a href="about.html"
                                                        >About Our Company</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="testimonial.html"
                                                        >Testimonials</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="faq.html">FAQ’s</a>
                                                </li>
                                                <li>
                                                    <a href="careers.html"
                                                        >Careers</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="consulting-request.html"
                                                        >Consulting Request</a
                                                    >
                                                </li>
                                            </ul> -->
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">Dịch vụ</a>
                                            <!-- <ul>
                                                <li>
                                                    <a href="services.html"
                                                        >View All Services</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="financial.html"
                                                        >Financial Planning</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="software.html"
                                                        >Software & Hi-Tech</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="business.html"
                                                        >Business Services</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="travel.html"
                                                        >Travel & aviation</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="quality.html"
                                                        >Quality Resourcing</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="media.html"
                                                        >Media & Entertainment</a
                                                    >
                                                </li>
                                            </ul> -->
                                        </li>
                                        <li class="">
                                            <a href="#contact">Liên hệ</a>
                                            <!-- <ul>
                                            <li><a href="case-1.html">Case Studies Style 01</a></li>
                                            <li><a href="case-2.html">Case Studies Style 02</a></li>
                                            <li><a href="case-3.html">Case Studies Style 03</a></li>
                                            <li><a href="case-single.html">Single Case Studies</a></li>
                                        </ul> -->
                                        </li>
                                        <!-- <li class="">
                                            <a href="blog-1.html">Blog</a>
                                            <ul>
                                            <li><a href="blog-1.html">Blog Small Image</a></li>
                                            <li><a href="blog-2.html">Blog Large Image</a></li>
                                            <li><a href="blog-3.html">Blog Modern</a></li>
                                            <li><a href="blog-single.html">Single Post</a></li>
                                        </ul>
                                        </li> -->
                                        <!-- <li class="dropdown">
                                            <a href="#">Shop</a>
                                            <ul>
                                                <li>
                                                    <a href="shop.html"
                                                        >Our Products</a
                                                    >
                                                </li>
                                                <li><a href="shop-single.html">Product Single</a></li>
                                                <li>
                                                    <a href="shoping-cart.html"
                                                        >Shopping Cart</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="checkout.html"
                                                        >Checkout</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="account.html"
                                                        >My account</a
                                                    >
                                                </li>
                                            </ul>
                                        </li> -->
                                        <!-- <li>
                                            <a href="contact.html">Contact us</a>
                                        </li> -->
                                    </ul>
                                </div>
                            </nav>
                            <!-- Main Menu End-->
                            <div class="outer-box">
                                <!--Cart Box-->
                                <!-- <div class="cart-btn">
                                    <a href="shop-single.html"
                                        ><span
                                            class="icon flaticon-shopping-cart"
                                        ></span
                                    ></a>
                                </div> -->

                                <!--Search Box-->
                                <div class="search-form">
                                    <form method="post" action="contact.html">
                                        <div class="form-group clearfix">
                                            <input
                                                type="email"
                                                name="email"
                                                value=""
                                                placeholder="Search"
                                                required
                                            />
                                            <button
                                                type="submit"
                                                class="theme-btn subscribe-btn"
                                            >
                                                <span
                                                    class="fa fa-search"
                                                ></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!--Nav Outer End-->
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HeroHeader',
    data() {
        return {
            active: false,
        };
    },
};
</script>
<style lang="scss">
.header__container {
    height: 110px;
    width: 100%;
    background: black;
}
</style>
