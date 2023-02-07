<template>
    <div class="Heroswap-app">
        <Header></Header>
        <nuxt></nuxt>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '~/components/partial/header';
import Footer from '~/components/partial/footer';

export default {
    name: 'DefaultLayout',
    components: { Header, Footer },
};
</script>
