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

<style lang="scss">
$theme-color: yellowgreen;
$default-size: 18px;
$font-color: #fff;
$coverOpacity: 0.6;

@mixin fullScreen() {
  width: 100vw;
  height: 100vh;
  display: flex;
}

@mixin defaultPadding() {
  padding: 10px;
}

@mixin button($padding: 20px) {
  padding: $padding;
  text-align: center;
}

.alert {
  @include fullScreen();
  .cover {
    @include fullScreen();
    background: rgba(0, 0, 0, $coverOpacity);
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
      background-color: $theme-color;
      font-size: $default-size;
      color: $font-color;
      @include defaultPadding();
      text-align: left;
      line-height: 50px;
      font-weight: 900;
    }

    .content {
      @include defaultPadding();
      font-size: $default-size;
    }

    .btnList {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
    }

    .btn {
      @include button();
      width: 50%;
    }

    .cancel {
      background-color: pink;
      color: $font-color;
    }
    .confirm {
      background-color: skyblue;
      color: $font-color;
    }
  }
}
</style>