<template>
  <div class="alert">
    <div class="cover">
      <div class="alertMain">
        <div class="title">温馨提示: {{ title }}</div>
        <div class="content">{{ content }}</div>
        <div class="btnList">
          <div @click="cancelEvent" class="btn cancel">取消</div>
          <div @click="confirmEvent" class="btn confirm">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "cancelEvent", "confirmEvent"],
};
</script>

<style lang="less">
@theme-color: yellowgreen;
@default-size: 18px;
@font-color: #fff;
@coverOpacity: 0.6;

.fullScreen() {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.defaultPadding() {
  padding: 10px;
}

.button(@padding: 20px) {
  padding: @padding;
  text-align: center;
}

.alert {
  .fullScreen();
  .cover {
    .fullScreen();
    background: rgba(0, 0, 0, @coverOpacity);
    justify-content: center;
    align-items: center;
  }

  .alertMain {
    position: relative;
    width: 600px;
    height: 400px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .title {
      height: 50px;
      background-color: @theme-color;
      font-size: @default-size;
      color: @font-color;
      .defaultPadding();
      text-align: left;
      line-height: 50px;
      font-weight: 900;
    }

    .content {
      .defaultPadding();
      font-size: @default-size;
    }

    .btnList {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
    }

    .btn {
      .button();
      width: 50%;
    }

    .cancel {
      background-color: pink;
      color: @font-color;
    }
    .confirm {
      background-color: skyblue;
      color: @font-color;
    }
  }
}
</style>