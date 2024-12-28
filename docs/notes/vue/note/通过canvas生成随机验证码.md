---
title: 通过canvas生成随机验证码
createTime: 2024/12/27 09:48:55
permalink: /vue/通过canvas生成随机验证码/
---

## 创建一个组件页面
```vue
<template>
  <div class="canvas">
    <canvas id="canvas" :width="canvasWidth" :height="canvasHeight" />
  </div>
</template>
<script>
export default {
    name: "Canvas",
    props: {
        // 设置画布的默认属性
        fresh: true,
        fontSizeMin: {
        type: Number,
        default: 20
        },
        fontSizeMax: {
        type: Number,
        default: 36
        },
        backgroundColorMin: {
        type: Number,
        default: 180
        },
        backgroundColorMax: {
        type: Number,
        default: 240
        },
        colorMin: {
        type: Number,
        default: 50
        },
        colorMax: {
        type: Number,
        default: 160
        },
        lineColorMin: {
        type: Number,
        default: 40
        },
        lineColorMax: {
        type: Number,
        default: 180
        },
        dotColorMin: {
        type: Number,
        default: 0
        },
        dotColorMax: {
        type: Number,
        default: 255
        },
        canvasWidth: {
        type: Number,
        default: 112
        },
        canvasHeight: {
        type: Number,
        default: 38
        }
  },
  data() {
        reruen {
            generatedCodes: "abcdefghijklmnopgrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"，
            generatedCode： “”
        }
    },
  methods: {
     // 生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
     // 生成一个随机的颜色
    randomColor(min, max) {
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    // 显示图片
    drawPic() {
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.textBaseline = "bottom";  //文本对齐方式
      // 绘制背景
      ctx.fillStyle = this.randomColor(
        this.backgroundColorMin,
        this.backgroundColorMax
      );
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      // 绘制文字
      for (let i = 0; i < this.generatedCode.length; i++) {
        this.drawText(ctx, this.generatedCode[i], i);
      }
      this.drawDot(ctx);
    },
    // 绘制文字
    drawText(ctx, txt, i) {
      ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
      ctx.font =
        this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei";
      let x = (i + 1) * (this.canvasWidth / (this.generatedCode.length + 1));
      let y = this.randomNum(this.fontSizeMax, this.canvasHeight - 5);
      var deg = this.randomNum(-10, 10);
      // 修改坐标原点和旋转角度
      ctx.translate(x, y);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.fillText(txt, 0, 0);
      // 恢复坐标原点和旋转角度
      ctx.rotate((-deg * Math.PI) / 180);
      ctx.translate(-x, -y);
    },
    // 画线
    drawLine(ctx) {
      //     绘制干扰线
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = this.randomColor(
          this.lineColorMin,
          this.lineColorMax
        );
        ctx.beginPath();
        ctx.moveTo(
          this.randomNum(0, this.canvasWidth),
          this.randomNum(0, this.canvasHeight)
        );
        ctx.lineTo(
          this.randomNum(0, this.canvasWidth),
          this.randomNum(0, this.canvasHeight)
        );
        ctx.stroke();
      }
    }, drawDot(ctx) {
      // 绘制干扰点
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          this.randomNum(0, this.canvasWidth),
          this.randomNum(0, this.canvasHeight),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      this.identifyCode = "";
      for (let i = 0; i < l; i++) {
        this.generatedCode += this.generatedCodes[
          this.randomNum(0, this.generatedCodes.length)
        ];
      }

      //绘制图片
      this.drawPic();

      //传值给父组件
      this.$emit("makedCode", this.generatedCode);
    }
  }，
   watch: {
    fresh() {
      //监听事件
      this.makeCode(generatedCodes, 4);
    }
  }
}
</script>
```
## 组件调用
```vue
<template>
  <div id="app">
    <input type="text" v-model="value" />
    <button @click="getlogin">确定</button>
    <hr />
    <div class="code" @click="refreshCode">
        <!-- ：fresh：父组件向子组件传送刷新验证码的信号；@makedCode：子组件向父组件传送验证码的值-->
      <Canvas :fresh="flag" @makedCode="getMakedCode"></Canvas>
    </div>
  </div>
</template>

<script>
import Canvas from "./components/Canvas";
export default {
  name: "Home",
  data() {
    return {
      flag: true, //该值变化，就会触发刷新
      code: "", //刷新后的验证码
      value: ""
    }
  },
  components: {
    Canvas
  },
  // 验证码初始化
  mounted() {
    this.flag = !this.flag;
  },
  methods: {
    getlogin() {
      if (this.value === this.code) {
        alert("验证成功！")
      } else {
        alert("验证失败！")
      }
    },
    // 切换验证码
    refreshCode() {
      this.flag = !this.flag;
    },
    getMakedCode(code) {
      this.code = code;
    },
  },
}
</script>
```
