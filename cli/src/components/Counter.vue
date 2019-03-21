<<template>
    <div>
        the count is {{count}}
        <button class="btn" @click="++count">
               add +1 
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count:1
        }
    },
}
</script>
