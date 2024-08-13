<template>
    <div style="display: flex; width:750px; margin-top: 15px;">
        <div>
            <div style="width: 200px; margin-left: 30px;">
                <div style="margin-bottom: 5px;">총 연성 횟수
                    <input type="number" style="width: 50px; margin-right: 10px;" v-model="inputCount" v-bind:disabled="isInputDisabled">
                </div>
                <div style="height: 52px;">
                    <button type="button" class="btn btn-primary" style="margin-right: 5px;" @click="resetElixir()">연성 횟수 변경</button>
                    <button type="button" class="btn btn-primary" @click="elixirStart()">시작</button>
                </div>
            </div>
            <div style="text-align: center;">
                <span>남은 연성 횟수</span>
                <table class="table table-bordered table-custom">
                    <tbody>
                        <tr v-for="(i, index) in list" v-bind:key="index">
                            <td :class="{'bg-custom' : index === elixirDto.ductilityCount
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn-primary" style="width: 40px; margin-right: 5px;" @click="undoClicked()" v-bind:disabled="isUndoButtonDisabled"><i class="bi bi-arrow-90deg-left"></i></button>
                <button type="button" class="btn btn-primary" style="width: 40px;" @click="redoClicked()" v-bind:disabled="isRedoButtonDisabled"><i class="bi bi-arrow-90deg-right"></i></button>
            </div>
        </div>

        <div>
            <div style="width: 100px; height: 110px;"><img style="width: 90%; height: 90%;" src="@/assets/rebedo.png"></div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.rebedo" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'rebedo' && elixirDto.ductilityCount < index
                        , 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'rebedo'
                        , 'bg-custom' : index === elixirDto.ductilityCount && elixirDto.selectWisePerson === 'rebedo'
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('rebedo', 'select', true)" v-bind:disabled="isSelectDisabled">선택</button>
            </div>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('rebedo', 'nonCountSelect', true)" v-bind:disabled="isSelectDisabled">기소x</button>
            </div>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('rebedo', 'twiceSelect', true)" v-bind:disabled="isSelectDisabled">2회</button>
            </div>
        </div>

        <div>
            <div style="width: 100px; height: 110px;"><img style="width: 90%; height: 90%;" src="@/assets/viriditas.png"></div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.viriditas" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'viriditas' && elixirDto.ductilityCount < index
                        , 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'viriditas'
                        , 'bg-custom' : index === elixirDto.ductilityCount && elixirDto.selectWisePerson === 'viriditas'
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('viriditas', 'select', true)" v-bind:disabled="isSelectDisabled">선택</button>
            </div>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('viriditas', 'nonCountSelect', true)" v-bind:disabled="isSelectDisabled">기소x</button>
            </div>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('viriditas', 'twiceSelect', true)" v-bind:disabled="isSelectDisabled">2회</button>
            </div>
        </div>
    
        <div>
            <div style="width: 100px; height: 110px;"><img style="width: 90%; height: 90%;" src="@/assets/citrini.png"></div>
            <table class="table table-bordered table-custom">
                <tbody>
                    <tr v-for="(i, index) in elixirDto.wisePersons.citrini" v-bind:key="index">
                        <td :class="{'bg-order-custom' : i === 3 && elixirDto.selectWisePerson === 'citrini' && elixirDto.ductilityCount < index
                         , 'bg-chaos-custom' : i === 6 && elixirDto.selectWisePerson !== 'citrini'
                         , 'bg-custom' : index === elixirDto.ductilityCount && elixirDto.selectWisePerson === 'citrini'
                        , 'border-ductility-custom' : list.length - 5  > index
                        , 'border-seal-ductility-custom' : list.length - 5 <= index && list.length - 2 > index}">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('citrini', 'select', true)" v-bind:disabled="isSelectDisabled">선택</button>
            </div>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('citrini', 'nonCountSelect', true)" v-bind:disabled="isSelectDisabled">기소x</button>
            </div>
            <div style="text-align: center;">
                <button type="button" class="btn btn-primary" style="width: 80px;" @click="selectWisePerson('citrini', 'twiceSelect', true)" v-bind:disabled="isSelectDisabled">2회</button>
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
            inputCount: 14,
            defalutAddDuctilityCount: 2,
            plusMinusDuctilityCount: 0,
            list: [],
            isInputDisabled: false,
            elixirDto: {
                wisePersons: {
                    rebedo: [],
                    viriditas: [],
                    citrini: []
                },
                selectWisePerson: null,
                beforeSelectWisePerson: null,
                ductilityCount: 0,
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
            for(let i = this.inputCount; i> -this.defalutAddDuctilityCount; i--) {
                this.list.push(i);
            }

            this.elixirDto = {
                wisePersons: {
                    rebedo: new Array(this.inputCount + this.defalutAddDuctilityCount),
                    viriditas: new Array(this.inputCount + this.defalutAddDuctilityCount),
                    citrini: new Array(this.inputCount + this.defalutAddDuctilityCount),
                },
                selectWisePerson: null,
                beforeSelectWisePerson: null,
                ductilityCount: 0,
                beforeDuctilityCount: 0,
                recordWisePersons: [{ empty: {empty: []}}]
            }

            this.isUndoButtonDisabled = true;
            this.isRedoButtonDisabled = true;
            this.isSelectDisabled = false;
            this.undoClickedCount = 0;
            this.redoClickedCount = 0;

        },
        resetElixir() {
            this.isInputDisabled = false;

        },
        selectWisePerson(wisePersonName, selectKind, isNotSimulation){
            if(this.isInputDisabled) {
                let isNotError = true;
                this.elixirDto.selectWisePerson = wisePersonName;

                if(this.elixirDto.ductilityCount > 0) {
                    this.isUndoButtonDisabled = false;
                }

                if(selectKind === 'select') {
                    // eslint-disable-next-line no-empty
                } else if(selectKind === 'nonCountSelect') {
                    this.plusMinusDuctilityCount++;
                    this.list.splice(this.elixirDto.ductilityCount, 0, this.list[this.elixirDto.ductilityCount]);
                    this.elixirDto.wisePersons.rebedo.length++;
                    this.elixirDto.wisePersons.viriditas.length++;
                    this.elixirDto.wisePersons.citrini.length++;
                    
                } else if(selectKind === 'twiceSelect') {
                    this.plusMinusDuctilityCount--;
                    this.list.splice(this.elixirDto.ductilityCount + 1, 1);
                    this.elixirDto.wisePersons.rebedo.pop();
                    this.elixirDto.wisePersons.viriditas.pop();
                    this.elixirDto.wisePersons.citrini.pop();

                } else {
                    alert("선택 오류!!");
                    isNotError = false;
                }

                if(isNotError) {
                    this.elixirDto.ductilityCount++;

                    for(const key of Object.keys(this.elixirDto.wisePersons)) {
                        if(key == wisePersonName) {
                            if(key == this.elixirDto.beforeSelectWisePerson) {
                                if(this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] >= 3) {
                                    this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount] = 1;
                                } else {
                                    if(this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] == undefined) {
                                        this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] = 0;
                                    }
                                    this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount] = this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] + 1;
                                }
                            } else {
                                if(this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] == undefined) {
                                    this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] = 0;
                                }
                                this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount] = 1;
                            }

                        } else {
                            if(key == this.elixirDto.beforeSelectWisePerson) {
                                this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount] = 1;
                            } else {
                                if(this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] >= 6) {
                                    this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount] = 1;
                                } else {
                                    if(this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] == undefined) {
                                        this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] = 0;
                                    }
                                    this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount] = this.elixirDto.wisePersons[key][this.elixirDto.ductilityCount - 1] + 1;
                                }
                            }
                        }
                    }
                    if(isNotSimulation) {
                        this.elixirDto.beforeDuctilityCount = this.elixirDto.ductilityCount;
                        this.elixirDto.beforeSelectWisePerson = wisePersonName;
                        this.selectSimulation();
                        this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount] = {[selectKind + "-" + wisePersonName]: JSON.parse(JSON.stringify(this.elixirDto.wisePersons))};

                        if(this.inputCount + this.defalutAddDuctilityCount + this.plusMinusDuctilityCount == this.elixirDto.ductilityCount + 1) {
                            this.isSelectDisabled = true;
                        }

                        this.isRedoButtonDisabled = true;
                        this.undoClickedCount = 0;
                        this.redoClickedCount = 0;
                    }
                }
                
            } else {
                alert("연성 횟수 입력 후 시작 버튼을 눌러주세요");
            }
        },
        selectSimulation() {
            for(let i = this.elixirDto.ductilityCount; i < this.list.length - 1; i++) {
                this.selectWisePerson(this.elixirDto.beforeSelectWisePerson, 'select', false);
            }
            this.elixirDto.ductilityCount = this.elixirDto.beforeDuctilityCount;
            
            
        },
        undoClicked(){
            this.undoClickedCount = this.undoClickedCount + 1;
            this.elixirDto.ductilityCount = this.elixirDto.ductilityCount - 1;
            if(this.elixirDto.ductilityCount == 0) {
               this.elixirStart();
            } else {
                const key = Object.keys(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount])[0];
                const selectKind = Object.keys(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount + 1])[0].split("-")[0];
                console.log("undo", selectKind);
                if(selectKind === 'nonCountSelect') {
                    this.plusMinusDuctilityCount--;
                    this.list.splice(this.elixirDto.ductilityCount + 1, 1);
                    
                } else if(selectKind === 'twiceSelect') {
                    this.plusMinusDuctilityCount++;
                    this.list.splice(this.elixirDto.ductilityCount + 1, 0, this.list[this.elixirDto.ductilityCount] - 1);
                }
                this.elixirDto.selectWisePerson = key.split("-")[1];
                this.elixirDto.wisePersons = JSON.parse(JSON.stringify(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount][key]));
                this.isRedoButtonDisabled = false;
                this.isSelectDisabled = false;
            }
        },
        redoClicked() {
            this.redoClickedCount = this.redoClickedCount + 1;
            if(this.undoClickedCount == this.redoClickedCount) {
                this.isRedoButtonDisabled = true;
            }

            if(this.inputCount + this.plusMinusDuctilityCount == this.elixirDto.ductilityCount) {
                this.isSelectDisabled = true;
            }

            this.elixirDto.ductilityCount = this.elixirDto.ductilityCount + 1;
           

            const key = Object.keys(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount])[0];
            const selectKind = Object.keys(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount])[0].split("-")[0];
            console.log("redo", selectKind);
            if(selectKind === 'nonCountSelect') {
                this.plusMinusDuctilityCount++;
                this.list.splice(this.elixirDto.ductilityCount, 0, this.list[this.elixirDto.ductilityCount - 1]);
                
            } else if(selectKind === 'twiceSelect') {
                this.plusMinusDuctilityCount--;
                this.list.splice(this.elixirDto.ductilityCount, 1);
            } 
            this.elixirDto.selectWisePerson = key.split("-")[1];
            this.elixirDto.wisePersons = JSON.parse(JSON.stringify(this.elixirDto.recordWisePersons[this.elixirDto.ductilityCount][key]));
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
  