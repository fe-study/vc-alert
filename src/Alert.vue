<template>
    <div
        v-show="show"
        :class="[
            {
                'alert'         : true,
                'alert-success' : (type === 'success'),
                'alert-warning' : (type === 'warning'),
                'alert-info'    : (type === 'info'),
                'alert-danger'  : (type === 'danger'),
                'top'           : (placement === 'top'),
                'top-right'     : (placement === 'top-right')
            },
            positionClass
        ]"
        transition="fade"
        :style="{ 'width': optionalWidth, 'position': position }"
        role="alert"
    >
        <button v-show="dismissable" type="button" class="close" @click="show = false">
            <span>&times;</span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
// polyfill
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === "number" && 
    isFinite(value) && 
    Math.floor(value) === value
}

export default {
    name: 'vc-alert',
    props: {
        mode: {
            type: String,
            default: 'fixed'
        },
        type: {
            type: String
        },
        dismissable: {
            type: Boolean,
            default: false
        },
        show: {
            type: Boolean,
            default: true,
            twoWay: true
        },
        duration: {
            type: [Number, String],
            default: 0
        },
        width: {
            type: String
        },
        placement: {
            type: String
        },
        positionClass: {
            type: String
        }
    },
    computed: {
        optionalWidth: function () {
            if (this.width == null || this.width === '') {
                return null
            }
            if (Number.isInteger(+this.width)) {
                return this.width + 'px'
            }
            return this.width
        },
        position () {
            if (this.mode === 'fixed') {
                return 'fixed'
            } else if (this.mode === 'relative') {
                return 'relative'
            } else {
                return 'static'
            }
        }
    },
    watch: {
        positionClass: {
            immediate: true,
            handler (val) {
                if (val != null && val !== '') {
                    this.placement = null
                }
            }
        },
        show (val) {
            if (this._timeout) clearTimeout(this._timeout)
            if (val && Boolean(this.duration)) {
            this._timeout = setTimeout(() => { this.show = false }, this.duration)
            }
        }
    }
}
</script>

<style>
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave {
  height: 0;
  opacity: 0;
}
.alert.top {
  position: fixed;
  top: 30px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1050;
}
.alert.top-right {
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 1050;
}
</style>
