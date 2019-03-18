<script>
import Base from './Base';
import {mixin1,mixin2,mixin3,mixin4} from '../mixins'
export default {
    extends:Base,
    mixins:[mixin1,mixin2,mixin3,mixin4],

    created(){
        console.log("I'm concrete");
        this.sayHello();
    },
    mounted(){
        console.log("concrete mounted");
        
    },
     methods:{
        sayHello(){
            console.log("Hello from concrete"); //pregazice od parenta metodu istoimenu, a hook ce se pozvati i od child i od parent
        }
    }
}
</script>