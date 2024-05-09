<template>
    <div style="display: flex; width:750px; margin-top: 15px;">
        <div>
            <div style="width: 200px; margin-left: 30px;">
                <div style="margin-bottom: 5px;">총 연성 횟수
                    <input type="number" style="width: 50px; margin-right: 10px;" v-model="inputCount" v-bind:disabled="isInputDisabled">
                </div>
                <div style="height: 52px;">
                    <button type="button" class="btn btn-primary" style="margin-right: 5px;" @click="resetElixir()">초기화</button>
                    <button type="button" class="btn btn-primary" @click="elixirStart()">시작</button>
                </div>
            </div>
            <div style="text-align: center;">
                <span>남은 연성 횟수</span>
                <table class="table table-bordered table-custom">
                    <tbody>
                        <tr v-for="(i, index) in list" v-bind:key="index">
                            <td :class="{'bg-custom' : index === this.elixirDto.ductilityCount
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
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
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'rebedo'
                        , 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'rebedo'
                        , 'bg-custom' : index === this.elixirDto.ductilityCount
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('rebedo')" v-bind:disabled="isSelectDisabled">선택</button>
            </div>
        </div>

        <div>
            <div style="width: 100px; height: 110px;">viriditas</div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.viriditas" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'viriditas'
                        , 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'viriditas'
                        , 'bg-custom' : index === this.elixirDto.ductilityCount
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('viriditas')" v-bind:disabled="isSelectDisabled">선택</button>
            </div>
        </div>
    
        <div>
            <div style="width: 100px; height: 110px;">citrini</div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.citrini" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'citrini'
                         , 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'citrini'
                         , 'bg-custom' : index === this.elixirDto.ductilityCount
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('citrini')" v-bind:disabled="isSelectDisabled">선택</button>
            </div>
        </div>

        <div style="margin-top: 797px;">
            <button type="button" class="btn btn-primary" style="width: 40px; margin-right: 5px;" @click="undoClicked()" v-bind:disabled="isUndoButtonDisabled"><i class="bi bi-arrow-90deg-left"></i></button>
            <button type="button" class="btn btn-primary" style="width: 40px;" @click="redoClicked()" v-bind:disabled="isRedoButtonDisabled"><i class="bi bi-arrow-90deg-right"></i></button>
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
            isInputDisabled: false,
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
                recordWisePersons: null,
            },
            isUndoButtonDisabled: true,
            isRedoButtonDisabled: true,
            undoClickedCount: 0,
            redoClickedCount: 0,
            isSelectDisabled: false,
        };
    },
    methods: {
        elixirStart() {
            this.isInputDisabled = true;
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
                recordWisePersons: [{empty: {empty: []}}]
            }

            this.isUndoButtonDisabled = true;
            this.isRedoButtonDisabled = true;
            this.isSelectDisabled = false;
            this.undoClickedCount = 0;
            this.redoClickedCount = 0;
            
        },
        resetElixir() {
            this.isInputDisabled = false;
            this.list = []
            for(let i = this.inputCount; i>-this.maxAddDuctilityCount; i--) {
                this.list.push(i);
            }
        },
        selectWisePerson(wisePersonName){
            if(this.isInputDisabled) {

                this.elixirDto.beforeSelectWisePerson = this.elixirDto.selectWisePerson;
                this.elixirDto.selectWisePerson = wisePersonName;

                if(this.undoClickedCount > 0) {
                    this.elixirDto.recordWisePersons.length = this.elixirDto.ductilityCount + 1;
                }

                if(this.elixirDto.totalDuctilityCount - 2 == this.elixirDto.ductilityCount) {
                    this.isSelectDisabled = true;
                }

                this.axios.post(this.HOST+"/select", this.elixirDto)
                .then(response => {
                    this.elixirDto = response.data;

                    if(this.elixirDto.ductilityCount > 0) {
                        this.isUndoButtonDisabled = false;
                    } else {
                        this.isUndoButtonDisabled = true;
                    }
                    this.isRedoButtonDisabled = true;
                    this.undoClickedCount = 0;
                    this.redoClickedCount = 0;
                    
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                alert("연성 횟수 입력 후 시작 버튼을 눌러주세요");
            }
        },
        undoClicked(){
            this.undoClickedCount = this.undoClickedCount+1;
            this.elixirDto.ductilityCount = this.elixirDto.ductilityCount - 1;
            if(this.elixirDto.ductilityCount == 0) {
               this.elixirStart();
            } else {
                this.elixirDto.selectWisePerson = Object.keys(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount])[0];
                this.elixirDto.wisePersons = this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount][this.elixirDto.selectWisePerson];
                this.isRedoButtonDisabled = false;
                this.isSelectDisabled = false;
            }
            

        },
        redoClicked() {
            this.redoClickedCount = this.redoClickedCount+1;
            if(this.undoClickedCount == this.redoClickedCount) {
                this.isRedoButtonDisabled = true;
            }

            if(this.elixirDto.totalDuctilityCount - 2 == this.elixirDto.ductilityCount) {
                this.isSelectDisabled = true;
            }

            this.elixirDto.ductilityCount = this.elixirDto.ductilityCount + 1;
           
            this.elixirDto.selectWisePerson = Object.keys(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount])[0];
            this.elixirDto.wisePersons = this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount][this.elixirDto.selectWisePerson];

            

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

  .table-custom .border-ductility-custom { border: 1px solid #212529; }
  .table-custom .border-seal-ductility-custom { border: 2px solid #8577ff; }
  </style>
  