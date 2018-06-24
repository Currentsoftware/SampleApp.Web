<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="show in availableShows" :key="show.id">
                    <td>{{ show.id }}</td>
                    <td><a href="#" @click="showDetails(show.id)">{{ show.name }}</a></td>
                    <td>
                        <a v-if="isFavorite(show)" href="#" @click="addToFavorites(show)">add to favorites</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <ul class="paging">
            <li v-if="currentPage > 0">
                <a href="#" @click="goPreviousPage()">Previous page</a>
            </li>
            <li>
                {{ currentPage }}
            </li>
            <li>
                <a href="#" @click="goNextPage()">Next page</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import availableShows from '../data/show';

    export default   {
        name: 'ShowsPage',
        data() {
            return {
                availableShows,
                pageNumber: 0
            };
        },
        computed: {
            currentPage() {
                return this.pageNumber
            },
            
        },
        methods: {
            goNextPage() {
                window.console.log('next')
                this.pageNumber++;
            },
            goPreviousPage() {
                window.console.log('previous')
                this.pageNumber--;

            },
            addToFavorites(show) {
                window.console.log('add to' + show.id)

                this.$store.commit('addToFavorites', show)
            },
            showDetails(id) {
                window.console.log('showDetails: ' + id);
                this.$router.push({ name: 'ShowDetails', params: { id: id } } );
            },
            isFavorite() {
                return true;
            }
        }
    };
</script>

<style>
    .paging li {
        list-style-type: none;
        padding: 12px;
    }
</style>