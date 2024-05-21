Vue.createApp();
const { createApp } = Vue

        const app = createApp({
            
            data() {
                return {
                  pageViews: 0,
                };
              },
              
              mounted() {
                // Retrieve count from localStorage
                const storedCount = localStorage.getItem('pageCount');
                if (storedCount) {
                  this.pageCount = parseInt(storedCount);
                  pageViews += 1;
                }
              },
              beforeDestroy() {
                // Save count to localStorage
                localStorage.setItem('pageCount', this.pageCount.toString());
              },
            })
        app.mount('#app')

        