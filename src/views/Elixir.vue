<template>
    <div style="display: flex; width:1200px; justify-content: space-evenly; margin-top: 15px;">
        <div>
            <div>
                <div style="margin-bottom: 5px;">전체 연성 횟수 입력</div>
                <div style="margin-bottom: 5px;">
                    <input type="text" style="width: 80px; margin-right: 10px;">
                    <button type="button" class="btn btn-primary">확인</button>
                </div>
                <div style="text-align: center;">
                    <button type="button" class="btn btn-primary">초기화</button>
                </div>
            </div>
            <div>
                <table class="table">
                    <tbody>
                        <tr v-for="(i) in list" v-bind:key="i">
                            <td>{{ i }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div>
            <div style="width: 230px; height: 110px;">rebedo</div>
            <table class="table">
                <tbody>
                    <tr v-for="(i) in list" v-bind:key="i">
                        <td>{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;">선택</button>
            </div>
        </div>

        <div>
            <div style="width: 230px; height: 110px;">viriditas</div>
            <table class="table">
                <tbody>
                    <tr v-for="(i) in list" v-bind:key="i">
                        <td>{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;">선택</button>
            </div>
        </div>
    
        <div>
            <div style="width: 230px; height: 110px;">citrini</div>
            <table class="table">
                <tbody>
                    <tr v-for="(i) in list" v-bind:key="i">
                        <td>{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;">선택</button>
            </div>
        </div>

    </div>
</template>
  
  <script>
  export default {
    name: "VueElixir",
    props: {},
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        };
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  