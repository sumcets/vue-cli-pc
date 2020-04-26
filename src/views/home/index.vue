<template>
    <div>
        {{ accessToken }}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['accessToken'])
    }
}
</script>

<style>

</style>