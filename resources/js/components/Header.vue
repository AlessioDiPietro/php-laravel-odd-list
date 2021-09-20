<template>
    <div>
        <ul class="nav justify-content-center bg-success">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'home'}">Boolpress</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'service'}">Servizi</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'contact'}">Contatti</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'product'}">Prodotti</router-link>
            </li>
            
        </ul>
    </div>
</template>
<script>

export default {
    name: "Header"
}
</script>
<style lang="scss" scoped>

</style>

