<template>
    <div style="display: flex; width:750px; margin-top: 15px;">
        <div>
            <div style="width: 200px; margin-left: 30px;">
                <div style="margin-bottom: 5px;">전체 연성 횟수 입력</div>
                <div style="margin-bottom: 5px;">
                    <input type="number" style="width: 80px; margin-right: 10px;" v-model="inputCount" v-bind:disabled="inputDisabled">
                    <button type="button" class="btn btn-primary" @click="inputCountOk()">확인</button>
                </div>
                <div style="text-align: center;">
                    <button type="button" class="btn btn-primary" @click="resetElixir()">초기화</button>
                </div>
            </div>
            <div style="text-align: center;">
                <table class="table table-bordered table-custom">
                    <tbody>
                        <tr v-for="(i, index) in list" v-bind:key="index">
                            <td :class="{'bg-custom' : index === this.elixirDto.ductilityCount }">{{ i }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div>
            <div style="width: 100px; height: 110px;">rebedo</div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.rebedo" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'rebedo', 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'rebedo', 'bg-custom' : index === this.elixirDto.ductilityCount}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('rebedo')">선택</button>
            </div>
        </div>

        <div>
            <div style="width: 100px; height: 110px;">viriditas</div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.viriditas" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'viriditas', 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'viriditas', 'bg-custom' : index === this.elixirDto.ductilityCount}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('viriditas')">선택</button>
            </div>
        </div>
    
        <div>
            <div style="width: 100px; height: 110px;">citrini</div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.citrini" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'citrini', 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'citrini', 'bg-custom' : index === this.elixirDto.ductilityCount}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('citrini')">선택</button>
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
            maxAddDuctilityCount: 2,
            inputCount: 14,
            list: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1],
            inputDisabled: false,
            elixirDto: {
                wisePersons: {
                    rebedo: new Array(14 + 2), // maxAddDuctilityCount와 동일하게 바꿔줄것
                    viriditas: new Array(14 + 2), // maxAddDuctilityCount와 동일하게 바꿔줄것
                    citrini: new Array(14 + 2) // maxAddDuctilityCount와 동일하게 바꿔줄것
                },
                selectWisePerson: null,
                beforeSelectWisePerson: null,
                ductilityCount: 0,
                totalDuctilityCount: 0,
            },
        };
    },
    methods: {
        inputCountOk() {
            this.inputDisabled = true;
            this.list = []
            for(let i = this.inputCount; i>-this.maxAddDuctilityCount; i--) {
                this.list.push(i);
            }

            this.elixirDto = {
                wisePersons: {
                    rebedo: new Array(this.inputCount+this.maxAddDuctilityCount),
                    viriditas: new Array(this.inputCount+this.maxAddDuctilityCount),
                    citrini: new Array(this.inputCount+this.maxAddDuctilityCount),
                },
                selectWisePerson: null,
                beforeSelectWisePerson: null,
                ductilityCount: 0,
                totalDuctilityCount: this.inputCount + this.maxAddDuctilityCount,
            }
            
        },
        resetElixir() {
            this.inputDisabled = false;
            this.inputCount = 14;
            this.list = []
            for(let i = this.inputCount; i>-this.maxAddDuctilityCount; i--) {
                this.list.push(i);
            }
        },
        selectWisePerson(wisePersonName){
            if(this.inputDisabled) {
                this.elixirDto.beforeSelectWisePerson = this.elixirDto.selectWisePerson;
                this.elixirDto.selectWisePerson = wisePersonName;

                this.axios.post(this.HOST+"/select", this.elixirDto)
                .then(response => {
                    this.elixirDto = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                alert("연성 횟수 입력 후 확인 버튼을 눌러주세요");
            }
        },
        
    },
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .table-custom { width: 40px; margin: auto; margin-top: 20px; margin-bottom: 20px;}
  .table-custom tbody tr td { height: 41px;}

  .table-custom .bg-custom { background-color: rgba(255, 115, 0, 0.2); }

  .table-custom .bg-order-custom { background-color: rgba(0, 117, 250, 0.247); }

  .table-custom .bg-chaos-custom { background-color: rgba(233, 186, 240, 0.712); }
  </style>
  