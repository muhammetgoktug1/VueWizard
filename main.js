new Vue({
    el: '#wizard',
    data: {
        wizardForm:{
            companyName:null,
            yourName:null,
            adressLine:null,
            city:null
        },
        step:1,
        totalStep:3,
        showModal: false,
        success:false

    },
    methods:{
        nextStep:function () {
            if(this.step == 1){
                if(!this.wizardForm.companyName || !this.wizardForm.yourName){
                    this.showModal = true;
                    return false;
                }
            }
            if(this.step == 2){
                if(!this.wizardForm.adressLine || !this.wizardForm.city){
                    this.showModal = true;
                    return false;
                }
            }
            this.step++
        },
        prevStep:function(){
            this.step--
        },
        submitStep:function(){
            this.success = true
        },
    },
    mounted(){

    }
});





    var s = document.getElementById('loading').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();

