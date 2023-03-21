<template>
    <div id="principal">
        <h2>Ejercicios JavaScript 2</h2>
        <section class="s1">
            <h1>Listas</h1>
            <article class="a1">
                <h3>Indices</h3>
                <h4 v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</h4>
                <input type="number" placeholder="Ingrese un indice" v-model="index">
                <button @click="select=fruits[index]">Buscar</button>
                <h4 style="margin-bottom: 2%;">{{ select }}</h4>
            </article>
            <article class="a1">
                <h3>Ingresar datos</h3>
                <h4 v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</h4>
                <input type="text" placeholder="Ingrese un nuevo elemento" v-model="nuevo">
                <button @click="fruits.push(nuevo)">Ingresar Elemento</button>
            </article>
            <article class="a1">
                <h3>Ingresar datos en un indice</h3>
                <h4 v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</h4>
                <input type="number" placeholder="Ingrese un indice" v-model="indice">
                <input type="text" placeholder="Ingrese un elemento" v-model="nuevo">
                <button @click="ingresarElemento()">Ingresar elemento</button>
            </article>
            <article class="a1">
                <h3>Imprimir en un rango</h3>
                <h4 v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</h4>
                <section id="rango">
                    <input type="number" placeholder="limite inferior" v-model="inferior">
                    <input type="number" placeholder="limite superior" v-model="superior">
                </section>
                <button @click="imprimirRango()">Rango</button>
                <h4 v-for="fruit in fruitsR" v-bind:key="fruit">{{ fruit }}</h4>                
            </article>
        </section>

    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
    },
    data(){
        return{
            fruits:['Apple','Banana','Cherry'],
            index:0,
            select:'',
            nuevo:'',
            indice:0,
            inferior:0,
            superior:0,
            fruitsR:[]
        };
    },
    methods:{
        ingresarElemento(){
            this.fruits.splice(this.indice,0,this.nuevo)
        },
        imprimirRango(){
            this.fruitsR = []
            for(let i=this.inferior;i<=this.superior;i++){
                this.fruitsR.push(this.fruits[i])
            }
        }
    }
})
export default class home extends Vue {
}

</script>

<style scoped>
     #principal{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: lightgray;
        margin-left: 10%;
    } 
    #principal h2{
        margin-top: 2%;
    }

    .s1{
        display: flex;
        width: 80%;
        height: fit-content;
        background-color: #282a35;
        border-radius: 5px;
        color: white;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
    }
    .s1 h1{
        margin-top: 20px;
    }

    .a1{
        width: 60%;
        height: fit-content;
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        background-color: rgb(17, 198, 230);
    }

    .a1 h3{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .a1 input{
        margin-top: 3%;
        width: 50%;
        padding: 1%;
        border: none;
        border-radius: 30px;
    }

    .a1 button{
        background-color: #04aa6d;
        width: 50%;
        padding: 1%;
        border: none;
        margin-top: 2%;
        border-radius: 30px;
        margin-bottom: 2%;
        color: white;
        cursor: pointer;
    }

    .a1 button:hover{
        background-color: #0be293;
    }

    #rango{
        display: flex;
        justify-content: space-evenly;
    }
    #rango input{
        width: 20%;
    }

</style>