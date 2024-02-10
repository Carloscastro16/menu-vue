<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import type { IMenuItem } from '@/interfaces/IMenuItems';
    defineProps<{data: IMenuItem, index: number}>()
    function parOImpar(index: any){
        index = index +1;
        console.log(index);
        if((index%2) == 0){
            return false
        }else{
            return true
        }
    }
</script>

<template>
    <RouterLink class="item" :class="{ 'no-click': parOImpar(index) }" :to="data.path" :name="data.name">{{ data.name }}</RouterLink>
</template>

<style>
    .item{
        height: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1.2rem;
        
    }
    .no-click {
        pointer-events: none;
        cursor: not-allowed;
    }
</style>
