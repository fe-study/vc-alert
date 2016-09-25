import Vue from 'vue'
import vcAlert from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },
            show: false,
            mode: 'fixed',
            type: 'success',
            width: '500',
            placement: 'top',
            duration: '3000',
            dismissable: true,
            positionClass: null
		}
	},
    methods: {
        indocument () {
            this.show = false 
            Vue.nextTick(() => {
                this.show = true
            })
            this.mode = 'relative'
            this.type = 'warning'
            this.placement = null
            this.duration = null
            this.positionClass = null
        },
        customPosition () {
            this.show = false 
            Vue.nextTick(() => {
                this.show = true
            })
            this.mode = 'fixed'
            this.positionClass = 'position-class'
        },
        toggle () {
            this.show = !this.show
        },
        topSuccess () {
            this.show = false 
            Vue.nextTick(() => {
                this.show = true
            })
            this.mode = 'fixed'
            this.type = 'success'
            this.placement = 'top'
            this.dismissable = true 
            this.duration = 3000
            this.positionClass = null
        },
        topRightDanger () {
            this.show = false 
            Vue.nextTick(() => {
                this.show = true
            })
            this.mode = 'fixed'
            this.type = 'danger'
            this.placement = 'top-right'
            this.dismissable = true 
            this.duration = 3000
            this.positionClass = null
        },
        topInfoNoDismissable () {
            this.show = false 
            Vue.nextTick(() => {
                this.show = true
            })
            this.mode = 'fixed'
            this.type = 'info'
            this.placement = 'top'
            this.dismissable = false
            this.duration = 3000
            this.positionClass = null
        }
    },
	components: {
        vcAlert
	}
})
