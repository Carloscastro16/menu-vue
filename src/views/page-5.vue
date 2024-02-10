<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import PlayButton from '@/components/buttons/PlayButton.vue';
    import { ref, type Ref } from 'vue';
    let openClosed: Ref<boolean> = ref(false);
</script>

<template>
    <div>
        <h1>Inicia sesión</h1>
        <div class="buttons">
            <div class="inicio">
                <RouterLink class="item" to="/" name="home">Regresar a Inicio</RouterLink>
            </div>
            <div class="descarga">
                <div class="download-btn">
                    Descarga nuestra app movil
                    <span v-if="!openClosed" @click="openClosed = true"><ion-icon name="eye-outline"></ion-icon></span>
                    <span v-if="openClosed" @click="openClosed = false"><ion-icon name="eye-off-outline"></ion-icon></span>
                </div>
                <PlayButton v-if="!openClosed"></PlayButton>
            </div>
        </div>
    </div>
</template>
<style scoped>
h1{
    text-align: center;
}
.buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.descarga{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.download-btn{
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    gap: 1rem;
}
.download-btn ion-icon{
    font-size: 1.2rem;
}
.download-btn span{
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>