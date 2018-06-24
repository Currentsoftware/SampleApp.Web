<template>
    <div>
        details
    </div>
</template>

<script>
    export default   {
        name: 'DetailsPage',
        data() {
            return {
                show: null
            };
        },
        computed: {
            activeShow() {
                const id = this.$route.params.id;

                return {
                    id: id,
                    name: 'Game of Thrones'
                }
            }
        }
    };
</script>

<style>
    
</style>